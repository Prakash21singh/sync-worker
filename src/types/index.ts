import type { MigrationFileStatus } from '../../prisma/generated/prisma/enums';

// you need to get all the files from the source adapter example Google drive
export type AdpaterUpdate = {
  [key in string]: any;
};
export interface GoogleDriveFile {
  id: string;
  parents: string[];
  name: string;
  mimeType: string;
  size: string;
}

export type GoogleDriveFolderCreationResponse = {
  id: string;
  name: string;
  kind: string;
  mimeType: string;
};

export interface NormalizedFile {
  id: string;
  sourceId: string;
  name: string;
  type: 'FILE' | 'FOLDER';
  mimeType: string | null;
  size: string | null | number;
  path: string | null;
  migrationId: string;
}

export type GoogleDriveFolderCreationParams = {
  folderName: string;
  accessToken: string;
  parentId?: string;
};

export type DropboxFolderCreationParams = {
  parentPath: string;
  accessToken: string;
};

type FolderCreationParams = GoogleDriveFolderCreationParams | DropboxFolderCreationParams;

export interface StorageAdapter {
  downloadFile(
    mimeType: string,
    fileId: string,
    accessToken: string,
    exportType: string | null,
  ): Promise<ReadableStream | null>;

  uploadFile(
    stream: ReadableStream | NodeJS.ReadableStream,
    pathname: string,
    accessToken: string,
  ): Promise<any>;

  createFolder(args: FolderCreationParams): Promise<{ id: string } | null>;

  /**
   * @description Returns the array of containing files and
   * @param args
   */
  listFiles(args: {
    parentSource: string;
    parentPath: string | null;
    access_token: string;
  }): Promise<any[]>;
}

export interface FileWithStatus {
  id: string;
  status: MigrationFileStatus;
}

export type MigrationJobBody = {
  userId: string;
  migrationId: string;
};
