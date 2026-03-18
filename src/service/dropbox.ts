import type { MigrationSelection } from '../../prisma/generated/prisma/client';
import type { DropboxFolderCreationParams, StorageAdapter } from '../types';

type BodyInit = Blob | FormData | URLSearchParams | ReadableStream<Uint8Array> | string;

type DropboxUploadResponse = {
  name: string;
  path_lower: string;
  path_display: string;
  id: string;
  size: number;
};

type DropboxCreateFolderResponse = {
  id: string;
};

type DropboxFolderEntry = {
  ['.tag']: 'file' | 'folder';
  name: string;
  path_display: string;
  id: string;
  size: number;
};

export class Dropbox implements StorageAdapter {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  /**
   * Upload file to Dropbox
   * @param stream file stream coming from source
   * @param pathname "/filename.ext" OR "/folder/filename.ext"
   * @param accessToken dropbox access token
   */
  async uploadFile(
    stream: ReadableStream | NodeJS.ReadableStream,
    pathname: string,
    accessToken: string,
  ): Promise<DropboxUploadResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/upload`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/octet-stream',
          'Dropbox-API-Arg': JSON.stringify({
            path: pathname,
            mode: 'add',
            autorename: true,
            mute: false,
            strict_conflict: false,
          }),
        },
        body: stream as any,
        duplex: 'half',
      });

      if (!response.ok) {
        throw new Error(
          `Failed to upload to Dropbox: ${response.status} ${response.statusText} for pathname: ${pathname} : ${await response.text()}`,
        );
      }

      const result = (await response.json()) as DropboxUploadResponse;
      return result;
    } catch (error: unknown) {
      console.error('Dropbox upload error:', error);

      if (error instanceof Error) {
        throw error;
      }

      throw new Error('Unknown Dropbox upload error');
    }
  }

  /**
   * Create a folder in Dropbox
   */
  async createFolder({
    accessToken,
    parentPath,
  }: DropboxFolderCreationParams): Promise<DropboxCreateFolderResponse> {
    const endpoint = process.env.DROPBOX_BASE_FOLDER_API;

    if (!endpoint) {
      throw new Error('DROPBOX_BASE_API env variable not set');
    }

    try {
      const response = await fetch(`${endpoint}/create_folder_v2`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          path: `/${parentPath}`,
          autorename: true,
        }),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      const result = (await response.json()) as {
        metadata: {
          id: string;
        };
      };

      return {
        id: result.metadata.id,
      };
    } catch (error: unknown) {
      console.error('Dropbox folder creation error:', error);

      if (error instanceof Error) {
        throw error;
      }

      throw new Error('Unknown Dropbox folder creation error');
    }
  }

  async downloadFile(
    mimeType: string,
    fileId: string,
    accessToken: string,
  ): Promise<ReadableStream | null> {
    throw new Error('Download file not implemented');
  }

  /**
   * @description List files used to list all the files in the parent folder and return the formatted data.
   * ```
   * parentSource : "parentId" | "parentPath"
   * // Dropbox works with path
   * // Google workds with parent id
   * // That's why we're keeping a single source of truth
   */
  async listFiles(args: { parentSource: string; access_token: string }) {
    const { parentSource, access_token } = args;
    let files = [];

    const response = await fetch(`${process.env.DROPBOX_BASE_FOLDER_API}/list_folder`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        include_deleted: false,
        include_has_explicit_shared_members: false,
        include_media_info: true,
        include_mounted_folders: true,
        include_non_downloadable_files: true,
        path: `${parentSource.startsWith('/') ? parentSource : `/${parentSource}`}` || '',
        recursive: false,
      }),
    });

    const result = (await response.json()) as {
      entries: any[];
      cursor: string;
      has_more: boolean;
    };

    const mapped = result.entries.map((entry: DropboxFolderEntry) => ({
      name: entry.name,
      sourceId: entry.id,
      path: entry.path_display,
      size: entry.size,
      type: entry['.tag'] === 'file' ? 'FILE' : 'FOLDER',
    }));

    files.push(...mapped);

    let cursor = result.cursor;
    let hasMore = result.has_more;

    while (hasMore) {
      const res = await fetch(`${process.env.DROPBOX_BASE_FOLDER_API}/list_folder/continue`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cursor }),
      });

      const data = (await res.json()) as {
        entries: any[];
        cursor: string;
        has_more: boolean;
      };

      const mapped = data.entries.map((entry: DropboxFolderEntry) => ({
        name: entry.name,
        sourceId: entry.id,
        path: entry.path_display,
        size: entry.size,
        type: entry['.tag'] === 'file' ? 'FILE' : 'FOLDER',
      }));

      files.push(...mapped);

      cursor = data.cursor;
      hasMore = data.has_more;
    }

    return files;
  }
}
