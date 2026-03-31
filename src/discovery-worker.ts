import 'dotenv/config';
import { Worker } from 'bullmq';
import { redis } from './lib/redis';
import type { NormalizedFile } from './types';
import { migrationQueue } from './queue/migration-queue';
import { normalizeMigrationFile } from './utils/mapping';
import {
  findAdapter,
  findMigration,
  updateMigration,
  createMigrationFiles,
  findMigrationSelections,
} from './queries';
import {
  getProviderConfig,
  fetchFilesRecursively,
  validateAndRotateToken,
} from './utils/function';

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

        await updateMigration(migrationId, {
          status: 'DISCOVERING',
        });

        const sourceAdapter = await findAdapter({
          id: migration.sourceAdapterId,
          userId,
        });

        if (!sourceAdapter) throw new Error('Adapter Not Found');

        const files = [];
        const folders = [];

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

        let flattenedFiles: NormalizedFile[] = [...files];

        await validateAndRotateToken(sourceAdapter);

        for (const folder of folders) {
          const { source, credentials } = getProviderConfig(
            sourceAdapter,
            folder,
            migration,
          );

          const nestedFiles = await fetchFilesRecursively({
            source,
            credentials,
            adapter_type: sourceAdapter.adapter_type,
          });

          flattenedFiles.push(...nestedFiles);
        }

        const migrationFiles = normalizeMigrationFile(
          flattenedFiles,
          migration.id,
        );

        await createMigrationFiles(migrationFiles);

        await updateMigration(migrationId, {
          status: 'TRANSFERRING',
          totalFiles: flattenedFiles.length,
        });

        await migrationQueue.add('start-migration', {
          userId,
          migrationId,
        });

        console.log(
          'Migration for id ' +
            migrationId +
            ' has been initiated successfully!',
        );
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
    }
  },
  { connection: redis },
);

discoveryWorker.on('completed', (job) => {
  console.log(`Job ${job.id} completed successfully.`);
});
