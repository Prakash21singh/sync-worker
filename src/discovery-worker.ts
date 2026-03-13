import { Worker } from 'bullmq';
import { redis } from './lib/redis';
import { prisma } from './lib/prisma';
import type { Adapter, MigrationFile } from '../prisma/generated/prisma/client';
import type { GoogleDriveFile } from './types';
import { migrationQueue } from './queue/migration-queue';
import { AdapterFactory } from './service/adapter-factory';
import dotenv from 'dotenv';

dotenv.config({});

const discoveryWorker = new Worker(
  process.env.DISCOVERY_QUEUE_NAME!,
  async (job) => {
    if (job.name === 'start-discovery') {
      const { userId, migrationId } = job.data;

      try {
        // Get the migration and the selected migration files
        const [migration, migrationSelections] = await Promise.all([
          prisma.migration.findUnique({
            where: {
              id: migrationId,
              userId,
            },
          }),
          prisma.migrationSelection.findMany({
            where: {
              migrationId,
            },
          }),
        ]);

        if (!migration) {
          throw new Error('Migration not found');
        }

        // Update the migration
        await prisma.migration.update({
          where: {
            id: migrationId,
          },
          data: {
            status: 'DISCOVERING',
          },
        });

        // Get the source adapter for straight forward updation
        const sourceAdapter = await prisma.adapter.findUnique({
          where: {
            id: migration.sourceAdapterId,
            userId,
          },
        });

        if (!sourceAdapter) throw new Error('Adapter Not Found');

        const files = [];
        const folders = [];

        // Seperation of concern between file and folders
        for (const selection of migrationSelections) {
          if (selection.type === 'FILE') {
            files.push({
              ...selection,
              path: null,
            });
          } else {
            folders.push({
              ...selection,
              path: null,
            });
          }
        }

        // Collection of all files
        let flattenedFiles = [...files];

        const isExpired = new Date(sourceAdapter.expires_in!).getTime() <= Date.now() + 60_000;

        if (isExpired) {
          const rotated = await rotateToken(sourceAdapter);
          await prisma.adapter.update({
            where: {
              id: sourceAdapter.id,
            },
            data: {
              access_token: rotated!.access_token,
              expires_in: new Date(Date.now() + rotated!.expires_in),
              ...(rotated!.refresh_token && {
                refresh_token: rotated!.refresh_token,
              }),
            },
          });

          // Update the currect source adapter so this current execution environment have the updated token.
          sourceAdapter.access_token = rotated!.access_token;
        }

        for (const folder of folders) {
          const nestedFiles = await fetchFilesRecursively(
            folder.sourceId,
            {
              access_token: sourceAdapter.access_token!,
              adapter_type: sourceAdapter.adapter_type!,
            },
            folder.name,
          );
          flattenedFiles.push(...nestedFiles);
        }

        if (sourceAdapter.adapter_type === 'GOOGLE_DRIVE') {
          await prisma.migrationFile.createMany({
            data: flattenedFiles.map((file) => {
              return {
                path: file.path || '',
                name: file.name,
                mimeType: file.mimeType,
                migrationId: migration.id,
                sourceFileId: file.sourceId || file.id,
                status: 'PENDING',
                size: Number(file.size),
              };
            }),
          });

          await prisma.migration.update({
            where: {
              id: migrationId,
            },
            data: {
              status: 'TRANSFERRING',
              totalFiles: flattenedFiles.length,
            },
          });

          await migrationQueue.add('start-migration', {
            userId,
            migrationId,
          });

          console.log('Migration for id ' + migrationId + ' has been initiated successfully!');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  },
  { connection: redis },
);

discoveryWorker.on('completed', (job) => {
  console.log(`Job ${job.id} completed successfully.`);
});

/**
 * @description The purpose of this function to collect all the file from the folder
 * @param parentId For getting all the content of the folder
 * @param sourceConfig Configurations of the source adapter for checking type and accessing access_token
 * @param parentPath for creating the parent path for the migration file creation
 * @returns Array of files for all the recursive folders
 */
async function fetchFilesRecursively(
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
async function rotateToken(adapter: Partial<Adapter>): Promise<{
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
            client_id: process.env.NEXT_PUBLIC_DROPBOX_APP_KEY!,
            client_secret: process.env.NEXT_PUBLIC_DROPBOX_CLIENT_SECRET!,
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
