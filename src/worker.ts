import { Worker } from 'bullmq';
import { redis } from './lib/redis';
import { AdapterFactory } from './service/adapter-factory';
import { generateFileConfig } from './utils';
import {
  findAdapter,
  findMigration,
  findMigrationFiles,
  updateMigration,
  updateMigrationFile,
} from './queries';
import { buildFolderPaths } from './utils/function';
import type { MigrationJobBody } from './types';

const worker = new Worker(
  'migration-queue',
  async (job) => {
    try {
      if (job.name === 'start-migration') {
        const { userId, migrationId } = job.data as MigrationJobBody;

        const migration = await findMigration({ userId, migrationId });

        if (!migration) throw new Error('Migration not found!');

        const [sourceAdapter, destinationAdapter, files] = await Promise.all([
          findAdapter({ id: migration.sourceAdapterId, userId }),
          findAdapter({ id: migration.destinationAdapterId, userId }),
          findMigrationFiles(migration.id),
        ]);

        if (!sourceAdapter) throw new Error('Source Adapter Not Found!');
        if (!destinationAdapter)
          throw new Error('Destination Adapter Not Found!');

        if (!destinationAdapter.access_token || !sourceAdapter.access_token)
          throw new Error(`
        ${!destinationAdapter.access_token ? 'Destination' : 'Source'} token not found
      `);

        let folderIdMap = new Map<string, string>();
        const folders = buildFolderPaths(files);

        const DestinationAdapter = AdapterFactory.getAdapter(
          destinationAdapter.adapter_type,
        );

        // Create all the folders on the Destination Cloud Provider.
        for (const folder of folders) {
          const parentFolder = folder.split('/').slice(0, -1).join('/');
          const parentId = folderIdMap.get(parentFolder);
          const folderName = folder.split('/').at(-1) ?? '';

          let createdFolder;

          if (destinationAdapter.adapter_type === 'GOOGLE_DRIVE') {
            createdFolder = await (DestinationAdapter as any).createFolder({
              accessToken: destinationAdapter.access_token,
              folderName,
              parentId,
            });
          } else if (destinationAdapter.adapter_type === 'DROPBOX') {
            createdFolder = await (DestinationAdapter as any).createFolder({
              accessToken: destinationAdapter.access_token,
              parentPath: folder as string,
            });
          }

          if (createdFolder) folderIdMap.set(folder, createdFolder.id);
        }

        const SourceProvider = AdapterFactory.getAdapter(
          sourceAdapter.adapter_type,
        );

        const BATCH_SIZE = 3;

        for (let i = 0; i < files.length; i += BATCH_SIZE) {
          const fileBatch = files.slice(i, i + BATCH_SIZE);

          const transferTasks = fileBatch.map(async (file) => {
            const fileConfig = generateFileConfig(
              file.mimeType,
              file.path,
              file.name,
            );
            const filePayload = {
              sourceId: file.sourceFileId,
              path: file.path,
              name: file.name,
              mimeType: file.mimeType,
            };

            const downloadRequest = SourceProvider.buildDownloadRequest
              ? SourceProvider.buildDownloadRequest(
                  filePayload,
                  sourceAdapter.access_token!,
                )
              : ({
                  fileId: file.sourceFileId,
                  mimeType: file.mimeType || 'application/octet-stream',
                  accessToken: sourceAdapter!.access_token!,
                } as any);

            const data = await SourceProvider.downloadFile(downloadRequest);

            if (!data || data.length === 0) {
              throw new Error(`Error downloading file ${file.name}`);
            }

            const uploadRequest = (DestinationAdapter as any).buildUploadRequest
              ? (DestinationAdapter as any).buildUploadRequest(
                  filePayload,
                  data,
                  destinationAdapter!.access_token!,
                  folderIdMap,
                )
              : ({
                  pathname: fileConfig.generatedPath!,
                  data,
                  accessToken: destinationAdapter!.access_token!,
                } as any);

            await (DestinationAdapter as any).uploadFile(uploadRequest);
            await updateMigrationFile(file.id, 'COMPLETED');
          });

          const results = await Promise.allSettled(transferTasks);
          for (let idx = 0; idx < results.length; idx += 1) {
            const result = results[idx];
            if (result?.status === 'rejected' && fileBatch[idx]) {
              await updateMigrationFile(fileBatch[idx]!.id, 'FAILED');
            }
          }
        }

        const completedCount = await findMigrationFiles(migration.id).then(
          (mfiles) => mfiles.filter((m) => m.status === 'COMPLETED').length,
        );
        const failedCount = await findMigrationFiles(migration.id).then(
          (mfiles) => mfiles.filter((m) => m.status === 'FAILED').length,
        );

        await updateMigration(migrationId, {
          status: failedCount > 0 ? 'FAILED' : 'COMPLETED',
          completedFiles: completedCount,
          failedFiles: failedCount,
        });
      }
    } catch (error: any) {
      console.error('Error:', error);
    }
  },
  {
    connection: redis,
  },
);

console.log('Migration worker is working');
