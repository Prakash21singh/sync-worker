import type {
  StorageAdapter,
  AdapterType,
  DropboxDownloadRequest,
  DropboxUploadRequest,
  DropboxCreateFolderRequest,
  DropboxListFilesRequest,
  GoogleDriveDownloadRequest,
  GoogleDriveUploadRequest,
  GoogleDriveCreateFolderRequest,
  GoogleDriveListFilesRequest,
} from '../types';
import { Dropbox } from './dropbox';
import { GoogleDrive } from './google-drive';

export class AdapterFactory {
  static getAdapter(
    type: AdapterType,
  ):
    | StorageAdapter<
        GoogleDriveDownloadRequest,
        GoogleDriveUploadRequest,
        GoogleDriveCreateFolderRequest,
        GoogleDriveListFilesRequest
      >
    | StorageAdapter<
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

      default:
        throw new Error('Unsupported adapter type');
    }
  }
}
