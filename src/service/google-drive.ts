import type {
  GoogleDriveFile,
  GoogleDriveFolderCreationResponse,
  StorageAdapter,
  GoogleDriveDownloadRequest,
  GoogleDriveUploadRequest,
  GoogleDriveCreateFolderRequest,
  GoogleDriveListFilesRequest,
} from '../types';
import { retryWithBackoff } from '../utils/function';

type TUploadFileParams = GoogleDriveUploadRequest;

type TDownloadParams = GoogleDriveDownloadRequest;

type TCreateFolderParams = GoogleDriveCreateFolderRequest;

type TListFileParams = GoogleDriveListFilesRequest;

export class GoogleDrive implements StorageAdapter<
  TDownloadParams,
  TUploadFileParams,
  TCreateFolderParams,
  TListFileParams
> {
  baseUrl: string;
  adapterType: 'GOOGLE_DRIVE' = 'GOOGLE_DRIVE';

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  buildDownloadRequest(
    file: { sourceId: string; mimeType?: string | null },
    accessToken: string,
  ): GoogleDriveDownloadRequest {
    return {
      fileId: file.sourceId,
      mimeType: file.mimeType || 'application/octet-stream',
      accessToken,
    };
  }

  buildUploadRequest(
    destinationPath: string,
    stream: ReadableStream | NodeJS.ReadableStream,
    accessToken: string,
  ): GoogleDriveUploadRequest {
    return {
      pathname: destinationPath,
      stream,
      accessToken,
    };
  }

  async downloadFile(
    paramsOrMimeType: TDownloadParams | string,
    fileId?: string,
    accessToken?: string,
    exportMimeType?: string | null,
  ): Promise<ReadableStream | NodeJS.ReadableStream | null> {
    let params: GoogleDriveDownloadRequest;

    if (typeof paramsOrMimeType === 'string' && fileId && accessToken) {
      params = {
        mimeType: paramsOrMimeType,
        fileId,
        accessToken,
        exportMimeType: exportMimeType ?? null,
      };
    } else {
      params = paramsOrMimeType as GoogleDriveDownloadRequest;
    }

    const { accessToken: token, fileId: id, mimeType, exportMimeType: exportType } = params;

    const fetchFn = async () => {
      const url = mimeType?.startsWith('application/vnd.google-apps')
        ? `${this.baseUrl}/${id}/export?mimeType=${exportType || 'application/pdf'}`
        : `${this.baseUrl}/${id}?alt=media`;

      const res = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        const text = await res.text();
        if (res.status === 429) {
          throw new Error(`Rate limit hit: ${res.status} ${text}`);
        }
        throw new Error(`Drive download failed: ${res.status} ${text}`);
      }

      return res.body;
    };

    return retryWithBackoff(fetchFn, 4, 500);
  }

  async uploadFile(params: TUploadFileParams): Promise<any> {
    const { accessToken, pathname, stream } = params;
    // Google Drive multipart upload not implemented yet; use an API wrapper when available.
    throw new Error('Google Drive upload is not implemented');
  }

  async createFolder(params: TCreateFolderParams) {
    const { accessToken, folderName, parentId } = params;

    const createFn = async () => {
      const response = await fetch(process.env.GOOGLE_DRIVE_BASE_URL!, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          name: folderName,
          mimeType: 'application/vnd.google-apps.folder',
          parents: parentId ? [parentId] : [],
        }),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      const result = (await response.json()) as GoogleDriveFolderCreationResponse;
      return { id: result.id };
    };

    return retryWithBackoff(createFn, 3, 400);
  }

  async listFiles(params: TListFileParams) {
    const { access_token, parentPath, parentSource } = params;
    let files: any[] = [];
    let pageToken: string | undefined;

    do {
      const query = new URLSearchParams({
        q: `'${parentSource}' in parents and trashed=false`,
        fields: 'nextPageToken,files(id,name,size,mimeType,parents)',
        supportsAllDrives: 'true',
        includeItemsFromAllDrives: 'true',
      });

      if (pageToken) query.append('pageToken', pageToken);

      const response = await retryWithBackoff(
        async () =>
          await fetch(`${process.env.GOOGLE_DRIVE_BASE_URL}?${query}`, {
            headers: { Authorization: `Bearer ${access_token}` },
          }),
        3,
        400,
      );

      if (!response.ok) {
        throw new Error(await response.text());
      }

      const data = (await response.json()) as {
        files: GoogleDriveFile[];
        nextPageToken?: string;
      };

      pageToken = data.nextPageToken;

      const mapped = data.files.map((file) => {
        const type: 'FOLDER' | 'FILE' =
          file.mimeType === 'application/vnd.google-apps.folder' ? 'FOLDER' : 'FILE';

        const { id, ...rest } = file;
        return {
          ...rest,
          type,
          sourceId: id,
        };
      });

      files.push(...mapped);
    } while (pageToken);

    return files;
  }
}
