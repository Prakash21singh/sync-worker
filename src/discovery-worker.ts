import { Worker } from 'bullmq';
import { redis } from './lib/redis';
import type { NormalizedFile } from './types';
import { migrationQueue } from './queue/migration-queue';
import dotenv from 'dotenv';
import {
  createMigrationFiles,
  findAdapter,
  findMigration,
  findMigrationSelections,
  updateAdapter,
  updateMigration,
} from './queries';
import { fetchFilesRecursively, rotateToken } from './utils/function';

dotenv.config({});

const discoveryWorker = new Worker(
  process.env.DISCOVERY_QUEUE_NAME!,
  async (job) => {
    if (job.name === 'start-discovery') {
      const { userId, migrationId } = job.data;

      try {
        // Get the migration and the selected migration files
        const [migration, migrationSelections] = await Promise.all([
          findMigration({ userId, migrationId }),
          findMigrationSelections({ migrationId }),
        ]);

        if (!migration) {
          throw new Error('Migration not found');
        }

        // Update the migration
        await updateMigration(migrationId, {
          status: 'DISCOVERING',
        });

        // Get the source adapter for straight forward updation
        const sourceAdapter = await findAdapter({ id: migration.sourceAdapterId, userId });

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
        let flattenedFiles: NormalizedFile[] = [...files];

        const isExpired = new Date(sourceAdapter.expires_in!).getTime() <= Date.now() + 60_000;

        if (isExpired) {
          const rotated = await rotateToken(sourceAdapter);
          await updateAdapter({
            id: sourceAdapter.id,
            data: {
              access_token: rotated!.access_token,
              expires_in: new Date(Date.now() + rotated!.expires_in * 1000),
              ...(rotated!.refresh_token && {
                refresh_token: rotated!.refresh_token,
              }),
            },
          });

          // Update the currect source adapter so this current execution environment have the updated token.
          sourceAdapter.access_token = rotated!.access_token;
        }

        for (const folder of folders) {
          // Intuition is to get all the normalised files inside every folder;
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

        const migrationFiles = flattenedFiles.map((file) => {
          return {
            path: file.path || '',
            name: file.name,
            mimeType: file.mimeType,
            migrationId: migration.id,
            sourceFileId: file.sourceId || file.id,
            status: 'PENDING',
            size: Number(file.size),
          };
        });

        await createMigrationFiles(migrationFiles);

        await updateMigration(migrationId, {
          status: 'TRANSFERRING',
          totalFiles: flattenedFiles.length,
        });

        await migrationQueue.add('start-migration', {
          userId,
          migrationId,
        });

        console.log('Migration for id ' + migrationId + ' has been initiated successfully!');
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
