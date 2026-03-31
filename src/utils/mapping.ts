import type { _Object } from '@aws-sdk/client-s3';
import type { DropboxFolderEntry } from '../service/dropbox';
import type { NormalizedFile } from '../types';
import { normalizeName, getFileExtention } from './function';
import { getExportMimeTypeFromExtension } from '.';

export const normalizeMigrationFile = (
  files: NormalizedFile[],
  migrationId: string,
) => {
  return files.map((file) => ({
    path: file.path,
    name: file.name,
    mimeType: file.mimeType,
    migrationId: migrationId,
    sourceFileId: file.sourceId || file.id,
    status: 'PENDING',
    size: Number(file.size),
  }));
};

export const normalizeDropboxFiles = (
  entries: DropboxFolderEntry[],
): Omit<NormalizedFile, 'migrationId' | 'id' | 'mimeType'>[] => {
  return entries.map((entry: DropboxFolderEntry) => ({
    name: entry.name,
    sourceId: entry.id,
    path: entry.path_display,
    size: entry.size,
    type: entry['.tag'] === 'file' ? 'FILE' : 'FOLDER',
  }));
};

export const normalizeS3Objects = (
  objects: _Object[],
): Omit<NormalizedFile, 'migrationId' | 'id'>[] => {
  return objects.map((object) => ({
    name: normalizeName(object.Key || ''),
    path: object.Key!,
    size: object.Size!,
    sourceId: object.Key!,
    type: 'FILE',
    mimeType: getExportMimeTypeFromExtension(getFileExtention(object.Key!)),
  }));
};
