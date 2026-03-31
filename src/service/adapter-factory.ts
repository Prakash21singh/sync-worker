import type {
  BaseStorageAdapter,
  FolderSupportingAdapter,
  AdapterType,
  DropboxDownloadRequest,
  DropboxUploadRequest,
  DropboxCreateFolderRequest,
  DropboxListFilesRequest,
  GoogleDriveDownloadRequest,
  GoogleDriveUploadRequest,
  GoogleDriveCreateFolderRequest,
  GoogleDriveListFilesRequest,
  S3DownloadRequest,
  S3CreateObjectRequest,
  S3ListObjectRequest,
} from '../types';
import { AWS_S3 } from './aws-s3';
import { Dropbox } from './dropbox';
import { GoogleDrive } from './google-drive';

export class AdapterFactory {
  static getAdapter(
    type: AdapterType,
  ):
    | BaseStorageAdapter<
        S3DownloadRequest,
        S3CreateObjectRequest,
        S3ListObjectRequest
      >
    | FolderSupportingAdapter<
        GoogleDriveDownloadRequest,
        GoogleDriveUploadRequest,
        GoogleDriveCreateFolderRequest,
        GoogleDriveListFilesRequest
      >
    | FolderSupportingAdapter<
        DropboxDownloadRequest,
        DropboxUploadRequest,
        DropboxCreateFolderRequest,
        DropboxListFilesRequest
      > {
    switch (type) {
      case 'GOOGLE_DRIVE':
        return new GoogleDrive(process.env.GOOGLE_DRIVE_BASE_URL!);

      case 'DROPBOX':
        return new Dropbox(process.env.DROPBOX_BASE_URL!);

      case 'AWS_S3':
        return new AWS_S3();
      default:
        throw new Error('Unsupported adapter type');
    }
  }
}
