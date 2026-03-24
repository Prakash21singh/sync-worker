import { Worker } from 'bullmq';
import { redis } from './lib/redis';
import { AdapterFactory } from './service/adapter-factory';
import { generateFileConfig } from './utils';
import { findAdapter, findMigration, findMigrationFiles, updateMigration, updateMigrationFile, } from './queries';
import { buildFolderPaths } from './utils/function';
const worker = new Worker('migration-queue', async (job) => {
    if (job.name === 'start-migration') {
        const { userId, migrationId } = job.data;
        const migration = await findMigration({ userId, migrationId });
        if (!migration)
            throw new Error('Migration not found!');
        const [sourceAdapter, destinationAdapter, files] = await Promise.all([
            findAdapter({ id: migration.sourceAdapterId, userId }),
            findAdapter({ id: migration.destinationAdapterId, userId }),
            findMigrationFiles(migration.id),
        ]);
        if (!sourceAdapter)
            throw new Error('Source Adapter Not Found!');
        if (!destinationAdapter)
            throw new Error('Destination Adapter Not Found!');
        if (!destinationAdapter.access_token || !sourceAdapter.access_token)
            throw new Error(`
        ${!destinationAdapter.access_token ? 'Destination' : 'Source'} token not found
      `);
        let folderIdMap = new Map();
        const folders = buildFolderPaths(files);
        const DestinationAdapter = AdapterFactory.getAdapter(destinationAdapter.adapter_type);
        // Create all the folders on the Destination Cloud Provider.
        for (const folder of folders) {
            const parentFolder = folder.split('/').slice(0, -1).join('/');
            const parentId = folderIdMap.get(parentFolder);
            const folderName = folder.split('/').at(-1) ?? '';
            let createdFolder;
            if (destinationAdapter.adapter_type === 'GOOGLE_DRIVE') {
                createdFolder = await DestinationAdapter.createFolder({
                    accessToken: destinationAdapter.access_token,
                    folderName,
                    parentId,
                });
            }
            else if (destinationAdapter.adapter_type === 'DROPBOX') {
                createdFolder = await DestinationAdapter.createFolder({
                    accessToken: destinationAdapter.access_token,
                    parentPath: folder,
                });
            }
            if (createdFolder)
                folderIdMap.set(folder, createdFolder.id);
        }
        const SourceProvider = AdapterFactory.getAdapter(sourceAdapter.adapter_type);
        const BATCH_SIZE = 3;
        // a provider-specific request is created inside adapter for type safety.
        for (let i = 0; i < files.length; i += BATCH_SIZE) {
            const fileBatch = files.slice(i, i + BATCH_SIZE);
            const transferTasks = fileBatch.map(async (file) => {
                const fileConfig = generateFileConfig(file.mimeType, file.path, file.name);
                const downloadRequest = SourceProvider.buildDownloadRequest
                    ? SourceProvider.buildDownloadRequest({ sourceId: file.sourceFileId, mimeType: file.mimeType }, sourceAdapter.access_token)
                    : {
                        fileId: file.sourceFileId,
                        mimeType: file.mimeType || 'application/octet-stream',
                        accessToken: sourceAdapter.access_token,
                    };
                const stream = await SourceProvider.downloadFile(downloadRequest);
                if (!stream) {
                    throw new Error(`Error downloading file ${file.name}`);
                }
                const uploadRequest = DestinationAdapter.buildUploadRequest
                    ? DestinationAdapter.buildUploadRequest(fileConfig.generatedPath, stream, destinationAdapter.access_token)
                    : {
                        pathname: fileConfig.generatedPath,
                        stream,
                        accessToken: destinationAdapter.access_token,
                    };
                await DestinationAdapter.uploadFile(uploadRequest);
                await updateMigrationFile(file.id, 'COMPLETED');
            });
            const results = await Promise.allSettled(transferTasks);
            for (let idx = 0; idx < results.length; idx += 1) {
                const result = results[idx];
                if (result?.status === 'rejected' && fileBatch[idx]) {
                    await updateMigrationFile(fileBatch[idx].id, 'FAILED');
                }
            }
        }
        const completedCount = await findMigrationFiles(migration.id).then((mfiles) => mfiles.filter((m) => m.status === 'COMPLETED').length);
        const failedCount = await findMigrationFiles(migration.id).then((mfiles) => mfiles.filter((m) => m.status === 'FAILED').length);
        await updateMigration(migrationId, {
            status: failedCount > 0 ? 'FAILED' : 'COMPLETED',
            completedFiles: completedCount,
            failedFiles: failedCount,
        });
    }
}, {
    connection: redis,
});
console.log('Migration worker is working');
//# sourceMappingURL=worker.js.map