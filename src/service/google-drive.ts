import type {
  GoogleDriveFile,
  GoogleDriveFolderCreationResponse,
  FolderSupportingAdapter,
  GoogleDriveDownloadRequest,
  GoogleDriveUploadRequest,
  GoogleDriveCreateFolderRequest,
  GoogleDriveListFilesRequest,
  MigrationFilePayload,
  Adapter,
  Migration,
} from '../types';
import { findParentPath, retryWithBackoff } from '../utils/function';

type TUploadFileParams = GoogleDriveUploadRequest;

type TDownloadParams = GoogleDriveDownloadRequest;

type TCreateFolderParams = GoogleDriveCreateFolderRequest;

type TListFileParams = GoogleDriveListFilesRequest;

export class GoogleDrive implements FolderSupportingAdapter<
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
    file: MigrationFilePayload,
    adapter: Adapter,
    migration: Migration,
  ): GoogleDriveDownloadRequest {
    return {
      fileId: file.sourceId,
      mimeType: file.mimeType || 'application/octet-stream',
      accessToken: adapter.access_token!,
    };
  }

  buildUploadRequest(
    file: MigrationFilePayload,
    data: Uint8Array,
    adapter: Adapter,
    migration: Migration,
    folderIdMap: Map<string, string>,
  ): GoogleDriveUploadRequest {
    const parentPath = findParentPath(file.path!);
    const parentId = parentPath ? folderIdMap.get(parentPath) : undefined;

    const request: GoogleDriveUploadRequest = {
      name: file.name,
      data,
      uploadMediaType: file.mimeType || 'application/octet-stream',
      accessToken: adapter.access_token!,
    };

    if (parentId) {
      request.parentId = parentId;
    }

    return request;
  }

  async downloadFile(
    paramsOrMimeType: TDownloadParams | string,
    fileId?: string,
    accessToken?: string,
    exportMimeType?: string | null,
  ): Promise<Uint8Array> {
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

    const {
      accessToken: token,
      fileId: id,
      mimeType,
      exportMimeType: exportType,
    } = params;

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

      const buffer = Buffer.from(await res.arrayBuffer());
      return buffer;
    };

    return retryWithBackoff(fetchFn, 4, 500);
  }

  async uploadFile(params: TUploadFileParams): Promise<any> {
    const { accessToken, name, parentId, data, uploadMediaType } = params;

    const boundary = `-------${Date.now()}-${Math.random().toString(16).slice(2)}`;
    const fileMetadata = {
      name,
      parents: parentId ? [parentId] : [],
    };

    const metadataPart = Buffer.from(
      `--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${JSON.stringify(fileMetadata)}\r\n`,
      'utf8',
    );

    const filePartHeader = Buffer.from(
      `--${boundary}\r\nContent-Type: ${uploadMediaType ?? 'application/octet-stream'}\r\n\r\n`,
      'utf8',
    );
    const footer = Buffer.from(`\r\n--${boundary}--`, 'utf8');

    const body = Buffer.concat([
      metadataPart,
      filePartHeader,
      Buffer.from(data),
      footer,
    ]);

    const uploadFn = async () => {
      const response = await fetch(
        `${process.env.GOOGLE_DRIVE_FILE_UPLOAD_URL ?? `${this.baseUrl}/upload/drive/v3/files`}?uploadType=multipart`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': `multipart/related; boundary=${boundary}`,
          },
          body,
        },
      );

      if (!response.ok) {
        const text = await response.text();
        if (response.status === 429) {
          throw new Error(
            `Google Drive upload rate limit: ${response.status} ${text}`,
          );
        }
        throw new Error(
          `Google Drive upload failed: ${response.status} ${text}`,
        );
      }

      return await response.json();
    };

    return retryWithBackoff(uploadFn, 4, 500);
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

      const result =
        (await response.json()) as GoogleDriveFolderCreationResponse;
      return { id: result.id };
    };

    return retryWithBackoff(createFn, 3, 400);
  }

  async listFiles(params: TListFileParams) {
    const { accessToken, parentPath, parentSource } = params;
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
            headers: { Authorization: `Bearer ${accessToken}` },
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
          file.mimeType === 'application/vnd.google-apps.folder'
            ? 'FOLDER'
            : 'FILE';

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
