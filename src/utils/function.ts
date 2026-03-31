import type {
  Adapter,
  Migration,
  MigrationFile,
  MigrationSelection,
} from '../../prisma/generated/prisma/client';
import { updateAdapter } from '../queries';
import { AdapterFactory } from '../service/adapter-factory';
import type { AdapterType, CredentialsInfo, NormalizedFile } from '../types';
import { logger } from './index';

export function shouldSkip(adapter_type: AdapterType) {
  if (adapter_type === 'AWS_S3') return true;
  return false;
}

export function getFileExtention(name: string) {
  return name.slice(name.lastIndexOf('.'));
}

export function isTokenExpiringSoon(
  expiresIn: Date,
  bufferMs: number = 2 * 60 * 1000,
): boolean {
  const expiresInMs = new Date(expiresIn).getTime();
  const nowWithBuffer = Date.now() + bufferMs;
  return expiresInMs <= nowWithBuffer;
}

export async function doesRequireTokenRotation(
  adapter: Partial<Adapter>,
): Promise<boolean> {
  if (shouldSkip(adapter.adapter_type!)) return false;
  if (!adapter.expires_in) return false;

  return isTokenExpiringSoon(adapter.expires_in);
}

export async function validateAndRotateToken(adapter: Partial<Adapter>) {
  const requireRotation = await doesRequireTokenRotation(adapter);

  if (!requireRotation) return;

  const rotated = await rotateToken(adapter);

  if (!rotated) {
    throw new Error(`Token rotation returned null for adapter ${adapter.id}`);
  }

  const newExpiresIn = new Date(Date.now() + rotated.expires_in * 1000);

  await updateAdapter({
    id: adapter.id!,
    data: {
      access_token: rotated.access_token,
      expires_in: newExpiresIn,
      ...(rotated.refresh_token && { refresh_token: rotated.refresh_token }),
    },
  });

  adapter.access_token = rotated.access_token;
  adapter.expires_in = newExpiresIn;
  if (rotated.refresh_token) {
    adapter.refresh_token = rotated.refresh_token;
  }
}

export async function rotateToken(adapter: Partial<Adapter>): Promise<{
  access_token: string;
  expires_in: number;
  refresh_token?: string;
} | null> {
  try {
    if (adapter.adapter_type === 'GOOGLE_DRIVE') {
      try {
        const res = await fetch(process.env.GOOGLE_REFRESH_TOKEN_URL!, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            client_id: process.env.GOOGLE_CLIENT_ID,
            client_secret: process.env.GOOGLE_CLIENT_SECRET,
            grant_type: 'refresh_token',
            refresh_token: adapter.refresh_token,
          }),
        });

        if (!res.ok) {
          const errorText = await res.text(); // Dropbox usually sends useful error
          throw new Error(
            `Dropbox token refresh failed: ${res.status} ${errorText}`,
          );
        }

        const data = (await res.json()) as any;

        return {
          access_token: data.access_token,
          expires_in: data.expires_in,
          refresh_token: data.refresh_token,
        };
      } catch (error: any) {
        logger.error({ err: error }, 'Google Token Refresh Error');
        return null;
      }
    }

    if (adapter.adapter_type === 'DROPBOX') {
      try {
        const res = await fetch(process.env.DROPBOX_REFRESH_TOKEN_URL!, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: adapter.refresh_token!,
            client_id: process.env.DROPBOX_APP_KEY!,
            client_secret: process.env.DROPBOX_CLIENT_SECRET!,
          }),
        });

        if (!res.ok) {
          const errorText = await res.text(); // Dropbox usually sends useful error
          throw new Error(
            `Dropbox token refresh failed: ${res.status} ${errorText}`,
          );
        }

        const data = (await res.json()) as any;

        return {
          access_token: data.access_token,
          expires_in: data.expires_in,
          refresh_token: data.refresh_token,
        };
      } catch (error: any) {
        console.error('❌ Token refresh error:', error.message);
        return null; // always return something predictable
      }
    }
    return null;
  } catch (error: any) {
    logger.error({ err: error }, 'Error rotating token');
    return null;
  }
}

export async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  retries = 3,
  initialDelay = 400,
  factor = 2,
): Promise<T> {
  let attempt = 0;
  let delay = initialDelay;

  while (true) {
    try {
      return await fn();
    } catch (error: any) {
      attempt += 1;
      if (attempt > retries) {
        throw error;
      }

      const isRateLimit =
        error?.message?.includes('429') ||
        error?.message?.toLowerCase().includes('rate limit');
      if (!isRateLimit && attempt > retries) {
        throw error;
      }

      await new Promise((resolve) => setTimeout(resolve, delay));
      delay *= factor;
    }
  }
}

/**
 * @description The purpose of this function to collect all the file from the folder
 * @param parentId For getting all the content of the folder
 * @param sourceConfig Configurations of the source adapter for checking type and accessing access_token
 * @param parentPath for creating the parent path for the migration file creation
 * @returns Array of files for all the recursive folders
 */

interface FilesParams {
  source: {
    parentId?: string;
    parentPath?: string;
    prefix?: string;
  };
  credentials: {
    access_token?: string;
    accessKeyId?: string;
    accessKeySecret?: string;
    region?: string;
    bucket?: string;
  };
  adapter_type: AdapterType;
}

export function getProviderConfig(
  adapter: Adapter,
  folder: MigrationSelection,
  migration?: Migration,
): Omit<FilesParams, 'adapter_type'> {
  const resolvers: Record<
    AdapterType,
    () => Omit<FilesParams, 'adapter_type'>
  > = {
    GOOGLE_DRIVE: () => ({
      source: {
        parentId: folder.sourceId,
        parentPath: folder.name,
      },
      credentials: {
        access_token: adapter.access_token!,
      },
    }),

    DROPBOX: () => ({
      source: {
        parentPath: folder.name,
      },
      credentials: {
        access_token: adapter.access_token!,
      },
    }),

    AWS_S3: () => ({
      source: {
        prefix: `${folder.name}/` || '/',
      },
      credentials: {
        accessKeyId: adapter.accessKeyId!,
        accessKeySecret: adapter.accessKeySecret!,
        region: adapter.region!,
        bucket: migration?.bucket!,
      },
    }),
  };

  const resolver = resolvers[adapter.adapter_type];

  if (!resolver) {
    throw new Error(`Unsupported adapter type: ${adapter.adapter_type}`);
  }

  return resolver();
}

export async function fetchFilesRecursively(
  params: FilesParams,
): Promise<NormalizedFile[]> {
  const { source, credentials, adapter_type } = params;

  const isDropbox = adapter_type === 'DROPBOX';
  const isGoogleDrive = adapter_type === 'GOOGLE_DRIVE';
  const isS3 = adapter_type === 'AWS_S3';

  const parentSource = isGoogleDrive
    ? source.parentId
    : isDropbox
      ? source.parentPath
      : isS3
        ? source.prefix
        : null;

  const SourceAdapter = AdapterFactory.getAdapter(adapter_type);

  let listFilesParams: any;

  if (adapter_type === 'AWS_S3') {
    listFilesParams = {
      accessKeyId: credentials.accessKeyId!,
      accessSecretKey: credentials.accessKeySecret!,
      region: credentials.region!,
      bucket: credentials.bucket!,
      prefix: source.prefix || '',
    };
  } else if (adapter_type === 'GOOGLE_DRIVE') {
    listFilesParams = {
      parentSource: parentSource!,
      parentPath: source.parentPath!,
      accessToken: credentials.access_token!,
    };
  } else if (adapter_type === 'DROPBOX') {
    listFilesParams = {
      parentSource: parentSource!,
      accessToken: credentials.access_token!,
    };
  }

  const files = await SourceAdapter.listFiles(listFilesParams);

  const result: NormalizedFile[] = [];

  for (const child of files) {
    // Here falsy value contains for both dropbox and s3
    const path = isGoogleDrive
      ? source.parentPath
        ? `${source.parentPath.replace(/\/$/, '')}/${child.name}`
        : child.name
      : child.path;

    if (child.type === 'FILE') {
      result.push({ ...child, path });
    } else {
      const childParentId = isGoogleDrive ? child.sourceId : undefined;
      const childParentPath = isDropbox ? child.path : path;

      const nested = await fetchFilesRecursively({
        source: {
          parentId: childParentId,
          parentPath: childParentPath,
        },
        credentials,
        adapter_type,
      });

      result.push(...nested);
    }
  }

  return result;
}

/**
 * @returns Folders paths
 * @description Build folder path and in length based sorting so parent folder get's created first
 * @example ```
 * const folders = [
 *  "/FolderA",
 *  "/FolderB",
 *  "/FolderC",
 *  "/FolderA/DeepFolderA",
 *  "/FolderC/DeepFolderC",
 *  "/FolderA/DeepFolderA/DeepFolderDeepA"
 *  "FolderC/DeepFolderC/DeepFolderDeepC"
 * ]
 * ```
 */
export function buildFolderPaths(files: MigrationFile[]) {
  const folderPaths = new Set<string>();
  for (const file of files) {
    const parts = file.path?.split('/') || [];
    let current = '';

    for (let i = 0; i < parts.length - 1; i++) {
      if (parts[i] !== '') {
        current = current !== '' ? `${current}/${parts[i]}` : parts[i] || '';
        folderPaths.add(current);
      }
    }
  }

  return [...folderPaths].sort(
    (a, b) => a.split('/').length - b.split('/').length,
  );
}

export function normalizeName(name: string) {
  return name.slice(name.lastIndexOf('/') + 1, name.lastIndexOf('.'));
}
