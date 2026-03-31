import type {
  FolderSupportingAdapter,
  DropboxDownloadRequest,
  DropboxUploadRequest,
  DropboxCreateFolderRequest,
  DropboxListFilesRequest,
  MigrationFilePayload,
} from '../types';
import { retryWithBackoff } from '../utils/function';
import { normalizeDropboxFiles } from '../utils/mapping';

type TUploadFileParams = DropboxUploadRequest;
type TDownloadParams = DropboxDownloadRequest;
type TCreateFolderParams = DropboxCreateFolderRequest;
type TListFileParams = DropboxListFilesRequest;

export type DropboxFolderEntry = {
  ['.tag']: 'file' | 'folder';
  name: string;
  path_display: string;
  id: string;
  size: number;
};

export class Dropbox implements FolderSupportingAdapter<
  TDownloadParams,
  TUploadFileParams,
  TCreateFolderParams,
  TListFileParams
> {
  baseUrl: string;
  adapterType: 'DROPBOX' = 'DROPBOX';

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  buildDownloadRequest(
    file: MigrationFilePayload,
    accessToken: string,
  ): DropboxDownloadRequest {
    return {
      path: file.path,
      accessToken,
    };
  }

  buildUploadRequest(
    file: MigrationFilePayload,
    data: Uint8Array,
    accessToken: string,
  ): DropboxUploadRequest {
    return {
      pathname: file.path,
      data,
      accessToken,
    };
  }

  async uploadFile(params: DropboxUploadRequest): Promise<any> {
    const doUpload = async () => {
      const response = await fetch(`${this.baseUrl}/upload`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${params.accessToken}`,
          'Content-Type': 'application/octet-stream',
          'Dropbox-API-Arg': JSON.stringify({
            path: `/${params.pathname}`,
            mode: 'add',
            autorename: true,
            mute: false,
            strict_conflict: false,
          }),
        },
        body: params.data,
      });

      if (!response.ok) {
        const text = await response.text();
        if (response.status === 429) {
          throw new Error(`Dropbox rate limit: ${response.status} ${text}`);
        }
        throw new Error(
          `Failed to upload to Dropbox: ${response.status} ${response.statusText} ${text}`,
        );
      }

      return await response.json();
    };

    return retryWithBackoff(doUpload, 4, 400);
  }

  async createFolder(params: TCreateFolderParams) {
    const endpoint = process.env.DROPBOX_BASE_FOLDER_API;

    if (!endpoint) {
      throw new Error('DROPBOX_BASE_API env variable not set');
    }

    const createFn = async () => {
      const response = await fetch(`${endpoint}/create_folder_v2`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${params.accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          path: `/${params.parentPath}`,
          autorename: true,
        }),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      const result = (await response.json()) as {
        metadata: { id: string };
      };

      return { id: result.metadata.id };
    };

    return retryWithBackoff(createFn, 3, 400);
  }

  async downloadFile(params: TDownloadParams): Promise<Uint8Array> {
    const doDownload = async () => {
      const response = await fetch(process.env.DROPBOX_FILE_DOWNLOAD_URL!, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${params.accessToken}`,
          'Dropbox-Api-Arg': JSON.stringify({ path: params.path }),
        },
      });

      if (!response.ok) {
        const text = await response.text();
        if (response.status === 429) {
          throw new Error(`Dropbox rate limit: ${response.status} ${text}`);
        }
        throw new Error(`Dropbox download failed: ${response.status} ${text}`);
      }

      const arrayBuffer = await response.arrayBuffer();
      return Buffer.from(arrayBuffer);
    };

    return retryWithBackoff(doDownload, 4, 500);
  }

  async listFiles(args: TListFileParams) {
    const { parentSource, accessToken } = args;
    let files: any[] = [];

    const doList = async () => {
      const response = await fetch(
        `${process.env.DROPBOX_BASE_FOLDER_API}/list_folder`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            include_deleted: false,
            include_has_explicit_shared_members: false,
            include_media_info: true,
            include_mounted_folders: true,
            include_non_downloadable_files: true,
            path:
              `${parentSource.startsWith('/') ? parentSource : `/${parentSource}`}` ||
              '',
            recursive: false,
          }),
        },
      );

      if (!response.ok) {
        throw new Error(await response.text());
      }

      return await response.json();
    };

    const result = (await retryWithBackoff(doList, 3, 400)) as {
      entries: any[];
      cursor: string;
      has_more: boolean;
    };

    const mapped = normalizeDropboxFiles(result.entries);

    files.push(...mapped);

    let cursor = result.cursor;
    let hasMore = result.has_more;

    while (hasMore) {
      const continueFn = async () => {
        const res = await fetch(
          `${process.env.DROPBOX_BASE_FOLDER_API}/list_folder/continue`,
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${accessToken}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cursor }),
          },
        );

        if (!res.ok) {
          throw new Error(await res.text());
        }

        return await res.json();
      };

      const data = (await retryWithBackoff(continueFn, 3, 400)) as {
        entries: DropboxFolderEntry[];
        cursor: string;
        has_more: boolean;
      };

      const mappedPage = normalizeDropboxFiles(data.entries);

      files.push(...mappedPage);

      cursor = data.cursor;
      hasMore = data.has_more;
    }

    return files;
  }
}
