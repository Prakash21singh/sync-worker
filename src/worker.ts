import { Worker } from 'bullmq';
import { redis } from './lib/redis';
import { prisma } from './lib/prisma';
import { AdapterFactory } from './service/adapter-factory';
import { getExportConfig } from './utils/export-type';
import { generateFileConfig } from './utils';

const worker = new Worker(
  'migration-queue',
  async (job) => {
    if (job.name === 'start-migration') {
      const { userId, migrationId } = job.data;

      const migration = await prisma.migration.findUnique({
        where: {
          id: migrationId,
          userId,
        },
      });

      if (!migration) return null;

      const [sourceAdapter, destinationAdapter] = await Promise.all([
        prisma.adapter.findUnique({
          where: {
            id: migration.sourceAdapterId,
          },
        }),
        prisma.adapter.findUnique({
          where: {
            id: migration.destinationAdapterId,
          },
        }),
      ]);

      const files = await prisma.migrationFile.findMany({
        where: {
          migrationId: migration.id,
        },
      });

      let folderPathSet = new Set();
      let folderPathMap = new Map();

      if (sourceAdapter!.adapter_type === 'GOOGLE_DRIVE') {
        for (const file of files) {
          const parts = file.path.split('/');
          let current = '';

          for (let i = 0; i < parts.length - 1; i++) {
            current = current ? `${current}/${parts[i]}` : parts[i]!;
            folderPathSet.add(current);
          }
        }

        let folders = [...folderPathSet];

        folders.sort((a: any, b: any) => a.split('/').length - b.split('/').length);

        const DestinationAdapter = AdapterFactory.getAdapter(destinationAdapter!.adapter_type);

        // Create all the folders on the Destination Cloud Provider.
        for (const folder of folders) {
          const createdFolder = await DestinationAdapter.createFolder({
            accessToken: destinationAdapter!.access_token!,
            parentPath: folder as string,
          });

          folderPathMap.set(folder, createdFolder.id);
        }

        const SourceProvider = AdapterFactory.getAdapter(sourceAdapter?.adapter_type!);

        const BATCH_SIZE = 3;

        for (let i = 0; i < files.length; i += BATCH_SIZE) {
          let batchFiles = files.slice(i, i + BATCH_SIZE);

          let requests = batchFiles.map(async (file) => {
            const fileConfig = generateFileConfig(file.mimeType!, file.path, file.name);

            console.log('Downloading config', {
              mimeType: file.mimeType!,
              fileName: file.name,
              exportType: fileConfig.mimeType!,
              generatedPath: fileConfig.generatedPath,
            });
            const stream = await SourceProvider.downloadFile(
              file.mimeType!,
              file.sourceFileId,
              sourceAdapter!.access_token!,
              fileConfig.mimeType!,
            );

            console.log(stream);

            if (!stream) throw new Error('Error downloading files');

            await DestinationAdapter.uploadFile(
              stream,
              fileConfig.generatedPath!,
              destinationAdapter!.access_token!,
            );
            await prisma.migrationFile.update({
              where: {
                id: file.id,
              },
              data: {
                status: 'COMPLETED',
              },
            });
          });

          await Promise.allSettled(requests);
        }
      } else if (sourceAdapter!.adapter_type === 'DROPBOX') {
      }

      await prisma.migration.update({
        where: {
          id: migrationId,
        },
        data: {
          status: 'COMPLETED',
        },
      });

      // Get the body;
      // Get the migration
      // Get the source adapter
      // Get the destination adapter
      // Get all the files in this migration
      // Sort the files into two type smallerFiles and biggerFiles
      // loop over all files to upload 5 smaller and 1 bigger parallely
      // Inside loop
      // Download files
      // If token expires
      // Rotate Token
      // Save to DB
      // Else stop the entire process and Fail the migration with the reason.

      // Upload file
      // If token expires
      // Rotate token
      // Save to DB
      // Else stop the entire process and fail the migration with the reason.
      // Files uplaoded
      // Update the migration db
      // Pick another migration
    }
  },
  {
    connection: redis,
  },
);

console.log('Migration worker is working');
