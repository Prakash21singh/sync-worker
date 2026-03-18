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
import type { FileWithStatus, MigrationJobBody } from './types';

const worker = new Worker(
  'migration-queue',
  async (job) => {
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
      if (!destinationAdapter) throw new Error('Destination Adapter Not Found!');

      if (!destinationAdapter.access_token || !sourceAdapter.access_token)
        throw new Error(`
        ${!destinationAdapter.access_token ? 'Destination' : 'Source'} token not found
      `);

      let folderIdMap = new Map<string, string>();
      const folders = buildFolderPaths(files);
      const DestinationAdapter = AdapterFactory.getAdapter(destinationAdapter.adapter_type);

      // Create all the folders on the Destination Cloud Provider.
      for (const folder of folders) {
        const parentFolder = folder.split("/").slice(0, -1).join("/")
        const parentId = folderIdMap.get(parentFolder);
        let folderName = folder.split('/').at(-1);

        let createdFolder = await DestinationAdapter.createFolder({
          accessToken: destinationAdapter.access_token,
          parentPath: folder as string,
          folderName,
          parentId,
        });

        if (createdFolder) folderIdMap.set(folder, createdFolder.id);
      }

      const SourceProvider = AdapterFactory.getAdapter(sourceAdapter.adapter_type);

      const BATCH_SIZE = 3;
      // TODO: Handle the function calls in this, different providers have different way of downloading and uploading file
      /**
       * @task Create function like this
       * ```
       * function downloadFile({
       *    Google: {
       *      mimeType,
       *      fileId,
       *      mimeType,
       *      exportType
       *    },
       *    Dropbox: {
       *      fileId, 
       *      accessToken,
       *      ...args
       *    },
       * }){
       *    // Handling
       * }
       * ```
       */
      // function downloadFile(){

      // }
      for (let i = 0; i < files.length; i += BATCH_SIZE) {
        let fileBatch = files.slice(i, i + BATCH_SIZE);

        let transferTasks = fileBatch.map(async (file) => {
          const fileConfig = generateFileConfig(file.mimeType!, file.path, file.name);

          const stream = await SourceProvider.downloadFile(
            file.mimeType!,
            file.sourceFileId,
            sourceAdapter!.access_token!,
            fileConfig.mimeType!,
          );

          if (!stream) throw new Error('Error downloading files');

          await DestinationAdapter.uploadFile(
            stream,
            fileConfig.generatedPath!,
            destinationAdapter!.access_token!,
          );
          await updateMigrationFile(file.id, 'COMPLETED');
        });

        await Promise.allSettled(transferTasks);
      }

      await updateMigration(migrationId, {
        status: 'COMPLETED',
      });
    }
  },
  {
    connection: redis,
  },
);

console.log('Migration worker is working');
