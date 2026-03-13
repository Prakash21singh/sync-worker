import type { StorageAdapter } from '../types';
import { Dropbox } from './dropbox';
import { GoogleDrive } from './google-drive';

type AdapterType = 'GOOGLE_DRIVE' | 'DROPBOX';

export class AdapterFactory {
  static getAdapter(type: AdapterType): StorageAdapter {
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
