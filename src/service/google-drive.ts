import type {
  GoogleDriveFile,
  GoogleDriveFolderCreationParams,
  GoogleDriveFolderCreationResponse,
  StorageAdapter,
} from '../types';

export class GoogleDrive implements StorageAdapter {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async downloadFile(
    mimeType: string,
    fileId: string,
    accessToken: string,
    exportMimeType: string | null = null,
  ): Promise<ReadableStream | null> {
    let url = '';

    if (mimeType.startsWith('application/vnd.google-apps')) {
      url = `${this.baseUrl}/${fileId}/export?mimeType=${exportMimeType || 'application/pdf'}`;
    } else {
      url = `${this.baseUrl}/${fileId}?alt=media`;
    }

    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!res.ok) throw new Error('Drive download failed');

    return res.body;
  }

  async uploadFile(): Promise<any> {
    throw new Error('Not implemented for Google Drive');
  }

  async createFolder({
    accessToken,
    folderName,
    parentId,
  }: GoogleDriveFolderCreationParams): Promise<{ id: string } | null> {
    try {
      const response = await fetch(process.env.GOOGLE_DRIVE_BASE_URL!, {
        method: "POST",
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

      const result = (await response.json()) as GoogleDriveFolderCreationResponse;

      return {
        id: result.id,
      };
    } catch (error: any) {
      console.error('Error:', error);
      return null;
    }
  }

  async listFiles(args: {
    parentSource: string;
    parentPath: string | null;
    access_token: string;
  }): Promise<any> {
    const { access_token, parentPath, parentSource } = args;
    let files = [];

    let pageToken: string | undefined;

    do {
      const params = new URLSearchParams({
        q: `'${parentSource}' in parents and trashed=false`,
        fields: 'nextPageToken,files(id,name,size,mimeType,parents)',
        supportsAllDrives: 'true',
        includeItemsFromAllDrives: 'true',
      });

      if (pageToken) params.append('pageToken', pageToken);

      const response = await fetch(`${process.env.GOOGLE_DRIVE_BASE_URL}?${params}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

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
