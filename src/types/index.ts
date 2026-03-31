import type { MigrationFileStatus } from '../../prisma/generated/prisma/enums';

// ─── Core / Shared ────────────────────────────────────────────────────────────

export type AdapterType = 'GOOGLE_DRIVE' | 'DROPBOX' | 'AWS_S3';

export type AdapterUpdate = {
  [key: string]: any;
};

export type MigrationJobBody = {
  userId: string;
  migrationId: string;
};

export type CredentialsInfo = {
  adapterType: AdapterType;
  googleAndDropbox: {
    accessToken?: string;
    refreshToken?: string;
    expiresIn?: Date;
  };
  s3: {
    accessKeyId?: string;
    accessKeySecret?: string;
    region?: string;
    bucket?: string;
  };
};

// ─── Normalized / Domain ──────────────────────────────────────────────────────

export interface NormalizedFile {
  id: string;
  sourceId: string;
  name: string;
  type: 'FILE' | 'FOLDER';
  mimeType: string | null;
  size: string | number | null;
  path: string | null;
  migrationId: string;
}

export interface FileWithStatus {
  id: string;
  status: MigrationFileStatus;
}

export interface MigrationFilePayload {
  sourceId: string;
  path: string;
  name: string;
  mimeType?: string | null;
}

// ─── Storage Adapter Interface ────────────────────────────────────────────────

export interface BaseStorageAdapter<
  TDownloadParams,
  TUploadParams,
  TListFilesParams,
> {
  adapterType: AdapterType;

  downloadFile(params: TDownloadParams): Promise<Uint8Array>;
  uploadFile(params: TUploadParams): Promise<any>;
  listFiles(params: TListFilesParams): Promise<any[]>;

  buildDownloadRequest?: (
    file: MigrationFilePayload,
    token: string,
  ) => TDownloadParams;

  buildUploadRequest?: (
    file: MigrationFilePayload,
    data: Uint8Array,
    token: string,
    folderIdMap: Map<string, string>,
  ) => TUploadParams;
}

export interface FolderSupportingAdapter<
  TDownloadParams,
  TUploadParams,
  TCreateFolderParams,
  TListFilesParams,
> extends BaseStorageAdapter<TDownloadParams, TUploadParams, TListFilesParams> {
  createFolder(params: TCreateFolderParams): Promise<{ id: string } | null>;
}

// ─── Google Drive ─────────────────────────────────────────────────────────────

export interface GoogleDriveFile {
  id: string;
  parents: string[];
  name: string;
  mimeType: string;
  size: string;
}

export interface GoogleDriveFolderCreationResponse {
  id: string;
  name: string;
  kind: string;
  mimeType: string;
}

export interface GoogleDriveDownloadRequest {
  fileId: string;
  accessToken: string;
  mimeType?: string | null;
  exportMimeType?: string | null;
}

export interface GoogleDriveUploadRequest {
  parentId?: string;
  name: string;
  data: Uint8Array;
  uploadMediaType: string;
  accessToken: string;
}

export interface GoogleDriveCreateFolderRequest {
  accessToken: string;
  folderName: string;
  parentId?: string;
}

export interface GoogleDriveListFilesRequest {
  parentSource: string;
  parentPath: string | null;
  accessToken: string;
}

// ─── Dropbox ──────────────────────────────────────────────────────────────────

export interface DropboxDownloadRequest {
  path: string;
  accessToken: string;
}

export interface DropboxUploadRequest {
  pathname: string;
  data: Uint8Array;
  accessToken: string;
}

export interface DropboxCreateFolderRequest {
  accessToken: string;
  parentPath: string;
}

export interface DropboxListFilesRequest {
  parentSource: string;
  accessToken: string;
}

// ─── AWS S3 ───────────────────────────────────────────────────────────────────

export interface S3DownloadRequest {
  something: string;
}

export interface S3CreateObjectRequest {
  something: string;
}

export interface S3ListObjectRequest {
  accessKeyId: string;
  accessSecretKey: string;
  region: string;
  bucket: string;
  prefix: string;
}

// ─── Union Types ──────────────────────────────────────────────────────────────

export type CloudUploadRequest =
  | GoogleDriveUploadRequest
  | DropboxUploadRequest;
