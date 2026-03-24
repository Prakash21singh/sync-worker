import type { MigrationFileStatus } from '../../prisma/generated/prisma/enums';

export type AdapterType = 'GOOGLE_DRIVE' | 'DROPBOX';

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

export type DropboxFolderCreationParams = {
  parentPath: string;
  accessToken: string;
};

export interface GoogleDriveDownloadRequest {
  fileId: string;
  accessToken: string;
  mimeType?: string | null;
  exportMimeType?: string | null;
}

export interface DropboxDownloadRequest {
  path: string;
  accessToken: string;
}

export interface GoogleDriveUploadRequest {
  pathname: string;
  stream: ReadableStream | NodeJS.ReadableStream;
  accessToken: string;
}

export interface DropboxUploadRequest {
  pathname: string;
  stream: ReadableStream | NodeJS.ReadableStream;
  accessToken: string;
}

export interface GoogleDriveCreateFolderRequest {
  accessToken: string;
  folderName: string;
  parentId?: string;
}

export interface DropboxCreateFolderRequest {
  accessToken: string;
  parentPath: string;
}

export interface GoogleDriveListFilesRequest {
  parentSource: string;
  parentPath: string | null;
  access_token: string;
}

export interface DropboxListFilesRequest {
  parentSource: string;
  access_token: string;
}

export interface StorageAdapter<
  TDownloadParams,
  TUploadParams,
  TCreateFolderParams,
  TListFilesParams,
> {
  adapterType: AdapterType;

  downloadFile(params: TDownloadParams): Promise<ReadableStream | NodeJS.ReadableStream | null>;
  uploadFile(params: TUploadParams): Promise<any>;
  createFolder(params: TCreateFolderParams): Promise<{ id: string } | null>;
  listFiles(params: TListFilesParams): Promise<any[]>;

  // convenience helpers for the worker
  buildDownloadRequest?: (
    file: { sourceId: string; mimeType?: string | null },
    token: string,
  ) => TDownloadParams;
  buildUploadRequest?: (
    destinationPath: string,
    stream: ReadableStream | NodeJS.ReadableStream,
    token: string,
  ) => TUploadParams;
}

export interface FileWithStatus {
  id: string;
  status: MigrationFileStatus;
}

export type MigrationJobBody = {
  userId: string;
  migrationId: string;
};
