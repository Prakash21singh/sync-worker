import type { Adapter, MigrationFile } from '../../prisma/generated/prisma/client';
import { AdapterFactory } from '../service/adapter-factory';

/**
 * @description Rotating the adapter access token for communicating to the external services
 * ```
 *     if(adapter.adapter_type === "GOOGLE_DRIVE"){
 *          // Token rotation logic of google drive
 *     }
 *
 *     if(adapter.adapter_type === "DROPBOX"){
 *          // Token rotation logic of dropbox
 *     }
 *
 *     // In case of extension of adapters add documentation as well as extension.
 * ```
 * @param adapter
 * @returns
 */
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
          throw new Error(`Dropbox token refresh failed: ${res.status} ${errorText}`);
        }

        const data = (await res.json()) as any;

        return {
          access_token: data.access_token,
          expires_in: data.expires_in,
          refresh_token: data.refresh_token,
        };
      } catch (error: any) {
        console.log('Google Token Refresh Error: ', error.message);
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
          throw new Error(`Dropbox token refresh failed: ${res.status} ${errorText}`);
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
    console.log('Error rotating token:', error);
    return null;
  }
}

/**
 * @description The purpose of this function to collect all the file from the folder
 * @param parentId For getting all the content of the folder
 * @param sourceConfig Configurations of the source adapter for checking type and accessing access_token
 * @param parentPath for creating the parent path for the migration file creation
 * @returns Array of files for all the recursive folders
 */
export async function fetchFilesRecursively(
  parentId: string,
  sourceConfig: {
    access_token: string;
    adapter_type: 'GOOGLE_DRIVE' | 'DROPBOX';
  },
  parentPath?: string,
) {
  let result = [];

  let isDropbox = sourceConfig.adapter_type === 'DROPBOX';
  let isGoogleDrive = sourceConfig.adapter_type === 'GOOGLE_DRIVE';
  let parentSource;

  if (isDropbox) {
    parentSource = parentPath;
  }
  if (isGoogleDrive) {
    parentSource = parentId;
  }

  const SourceAdapter = AdapterFactory.getAdapter(sourceConfig.adapter_type);

  // Ensure backward compatibility before changing things;
  /**
   * For google it needed the parentSource and parentPath to create the list of files
   * For Dropbox it needed the parentSource(Pathname) to create the list of files
   */
  const files = await SourceAdapter.listFiles({
    access_token: sourceConfig.access_token!,
    parentSource: parentSource!,
    parentPath: parentPath!,
  });

  for (const child of files) {
    let path;
    if (isGoogleDrive) {
      path = parentPath ? `${parentPath}/${child.name}` : child.name;
    }

    if (isDropbox) {
      path = child.path;
    }

    if (child.type === 'FILE') {
      result.push({
        ...child,
        path,
      });
    } else {
      let childSource;
      if (isGoogleDrive) {
        childSource = child.sourceId;
      }
      if (isDropbox) {
        childSource = child.path;
      }
      const nested: any[] = await fetchFilesRecursively(childSource, sourceConfig, path);
      result.push(...nested);
    }
  }

  return result;
}

/**
 * @returns Folders paths
 * @description Build folder path and in length based sorting so parent folder get's created first
 * @example ```
 *
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
    const parts = file.path.split('/');

    let current = '';

    for (let i = 0; i < parts.length - 1; i++) {
      current = current ? `${current}/${parts[i]}` : (parts[i] ?? '');
    }

    folderPaths.add(current);
  }

  return [...folderPaths].sort((a, b) => a.split('/').length - b.split('/').length);
}
