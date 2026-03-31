import { Worker } from 'bullmq';
import { redis } from './lib/redis';
import { AdapterFactory } from './service/adapter-factory';
import { generateFileConfig, logger } from './utils';
import {
  findAdapter,
  findMigration,
  findMigrationFiles,
  updateMigration,
  updateMigrationFile,
} from './queries';
import { buildFolderPaths } from './utils/function';
import type { MigrationJobBody, Adapter, Migration } from './types';
import type { MigrationFile } from '../prisma/generated/prisma/client';

// # Validate incoming job data and fetch necessary info from DB
async function validateMigrationJob({
  userId,
  migrationId,
}: {
  userId: string;
  migrationId: string;
}): Promise<{
  migration: Migration;
  sourceAdapter: Adapter;
  destinationAdapter: Adapter;
  files: MigrationFile[];
}> {
  const migration = await findMigration({ userId, migrationId });

  if (!migration) {
    throw new Error('Migration not found!');
  }

  const [sourceAdapter, destinationAdapter, files] = await Promise.all([
    findAdapter({ id: migration.sourceAdapterId, userId }),
    findAdapter({ id: migration.destinationAdapterId, userId }),
    findMigrationFiles(migration.id),
  ]);

  if (!sourceAdapter) {
    throw new Error('Source Adapter Not Found!');
  }

  if (!destinationAdapter) {
    throw new Error('Destination Adapter Not Found!');
  }

  // Note: S3 uses API keys instead of access_token
  if (
    !destinationAdapter.access_token &&
    destinationAdapter.adapter_type !== 'AWS_S3'
  ) {
    throw new Error('Destination adapter access token not found.');
  }

  if (!sourceAdapter.access_token && sourceAdapter.adapter_type !== 'AWS_S3') {
    throw new Error('Source adapter access token not found.');
  }

  return {
    migration,
    sourceAdapter,
    destinationAdapter,
    files,
  };
}

// # Creates necessary folders on the destination adapter
async function createDestinationFolders(
  destinationAdapter: Adapter,
  files: MigrationFile[],
): Promise<Map<string, string>> {
  const folderIdMap = new Map<string, string>();
  const folders = buildFolderPaths(files);

  if (folders.length === 0) {
    return folderIdMap;
  }

  const DestinationAdapter = AdapterFactory.getAdapter(
    destinationAdapter.adapter_type,
  );

  // Only create folders for providers that support them
  if (destinationAdapter.adapter_type === 'AWS_S3') {
    return folderIdMap;
  }

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
        parentPath: folder,
      });
    }

    if (createdFolder) {
      folderIdMap.set(folder, createdFolder.id);
    }
  }

  return folderIdMap;
}

// # Processes a single file: downloads from source and uploads to destination
async function processFileTransfer(
  file: MigrationFile,
  sourceAdapter: Adapter,
  destinationAdapter: Adapter,
  migration: Migration,
  folderIdMap: Map<string, string>,
): Promise<void> {
  const filePayload = {
    sourceId: file.sourceFileId,
    path: file.path!,
    name: file.name,
    mimeType: file.mimeType,
  };

  const SourceProvider = AdapterFactory.getAdapter(sourceAdapter.adapter_type);
  const DestinationProvider = AdapterFactory.getAdapter(
    destinationAdapter.adapter_type,
  );

  // Build download request
  const downloadRequest = SourceProvider.buildDownloadRequest
    ? SourceProvider.buildDownloadRequest(filePayload, sourceAdapter, migration)
    : ({
        fileId: file.sourceFileId,
        mimeType: file.mimeType || 'application/octet-stream',
        accessToken: sourceAdapter.access_token!,
      } as any);

  // Download file
  const data = await SourceProvider.downloadFile(downloadRequest);

  if (!data || data.length === 0) {
    throw new Error(`Failed to download file: ${file.name}`);
  }

  // Build upload request
  const uploadRequest = DestinationProvider.buildUploadRequest
    ? DestinationProvider.buildUploadRequest(
        filePayload,
        data,
        destinationAdapter,
        migration,
        folderIdMap,
      )
    : ({
        pathname: generateFileConfig(file.mimeType, file.path!, file.name)
          .generatedPath!,
        data,
        accessToken: destinationAdapter.access_token!,
      } as any);

  // Upload file
  await DestinationProvider.uploadFile(uploadRequest);

  // Mark as completed
  await updateMigrationFile(file.id, 'COMPLETED');
}

/**
 * Processes a batch of files concurrently
 */
async function processFileBatch(
  fileBatch: MigrationFile[],
  sourceAdapter: Adapter,
  destinationAdapter: Adapter,
  migration: Migration,
  folderIdMap: Map<string, string>,
): Promise<void> {
  const transferTasks = fileBatch.map((file) =>
    processFileTransfer(
      file,
      sourceAdapter,
      destinationAdapter,
      migration,
      folderIdMap,
    ),
  );

  const results = await Promise.allSettled(transferTasks);

  // Handle failed transfers
  for (let idx = 0; idx < results.length; idx++) {
    const result = results[idx];
    const file = fileBatch[idx];
    if (result && result.status === 'rejected' && file) {
      await updateMigrationFile(file.id, 'FAILED');
    }
  }
}

/**
 * Updates the final migration status based on file results
 */
async function finalizeMigration(migrationId: string): Promise<{
  totalFiles: number;
  completedCount: number;
  failedCount: number;
  status: string;
}> {
  const files = await findMigrationFiles(migrationId);
  const completedCount = files.filter((f) => f.status === 'COMPLETED').length;
  const failedCount = files.filter((f) => f.status === 'FAILED').length;
  const totalFiles = files.length;

  const status = failedCount > 0 ? 'FAILED' : 'COMPLETED';

  await updateMigration(migrationId, {
    status,
    completedFiles: completedCount,
    failedFiles: failedCount,
  });

  return { totalFiles, completedCount, failedCount, status };
}

/**
 * Generates a formatted table for migration statistics
 */
function formatMigrationTable(stats: {
  totalFiles: number;
  completedCount: number;
  failedCount: number;
  status: string;
  duration: number;
  successRate: string;
  sourceProvider: string;
  destinationProvider: string;
}): string {
  const table = `
📊 Migration Summary
═══════════════════════════════════════════════════════════════
Total Files:        ${stats.totalFiles.toString().padStart(6)}
Completed:          ${stats.completedCount.toString().padStart(6)}
Failed:             ${stats.failedCount.toString().padStart(6)}
Success Rate:       ${stats.successRate.padStart(6)}
Duration:           ${formatDuration(stats.duration).padStart(6)}
Status:             ${stats.status.padStart(6)}
Source:             ${stats.sourceProvider.padStart(6)}
Destination:        ${stats.destinationProvider.padStart(6)}
═══════════════════════════════════════════════════════════════
`;

  return table;
}

/**
 * Formats duration in milliseconds to human readable format
 */
function formatDuration(ms: number): string {
  if (ms < 1000) {
    return `${ms}ms`;
  }

  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  if (hours > 0) {
    const remainingMinutes = minutes % 60;
    const remainingSeconds = seconds % 60;
    return `${hours}h ${remainingMinutes}m ${remainingSeconds}s`;
  } else if (minutes > 0) {
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  } else {
    return `${(ms / 1000).toFixed(1)}s`;
  }
}

const worker = new Worker(
  'migration-queue',
  async (job) => {
    const startTime = Date.now();

    try {
      if (job.name === 'start-migration') {
        const { userId, migrationId } = job.data as MigrationJobBody;

        logger.info(
          {
            migrationId,
            userId,
            jobId: job.id,
          },
          '🚀 Starting migration job',
        );

        // Validate and get migration data
        const { migration, sourceAdapter, destinationAdapter, files } =
          await validateMigrationJob({ userId, migrationId });

        logger.info(
          {
            migrationId,
            sourceProvider: sourceAdapter.adapter_type,
            destinationProvider: destinationAdapter.adapter_type,
            totalFiles: files.length,
          },
          '📋 Migration details retrieved',
        );

        // Create destination folders (if supported by provider)
        const folderIdMap = await createDestinationFolders(
          destinationAdapter,
          files,
        );

        if (folderIdMap.size > 0) {
          logger.info(
            {
              migrationId,
              foldersCreated: folderIdMap.size,
            },
            '📁 Destination folders created',
          );
        }

        // Process files in batches
        const BATCH_SIZE = 3;
        logger.info(
          {
            migrationId,
            batchSize: BATCH_SIZE,
            totalBatches: Math.ceil(files.length / BATCH_SIZE),
          },
          '⚡ Starting file transfer process',
        );

        for (let i = 0; i < files.length; i += BATCH_SIZE) {
          const fileBatch = files.slice(i, i + BATCH_SIZE);
          const batchNumber = Math.floor(i / BATCH_SIZE) + 1;

          logger.debug(
            {
              migrationId,
              batchNumber,
              filesInBatch: fileBatch.length,
            },
            `Processing batch ${batchNumber}`,
          );

          await processFileBatch(
            fileBatch,
            sourceAdapter,
            destinationAdapter,
            migration,
            folderIdMap,
          );
        }

        // Finalize migration status
        const stats = await finalizeMigration(migrationId);
        const duration = Date.now() - startTime;
        const successRate =
          stats.totalFiles > 0
            ? ((stats.completedCount / stats.totalFiles) * 100).toFixed(1)
            : '0.0';

        const tableData = {
          totalFiles: stats.totalFiles,
          completedCount: stats.completedCount,
          failedCount: stats.failedCount,
          status: stats.status,
          duration,
          successRate: `${successRate}%`,
          sourceProvider: sourceAdapter.adapter_type,
          destinationProvider: destinationAdapter.adapter_type,
        };

        const table = formatMigrationTable(tableData);

        logger.info(
          {
            migrationId,
            userId,
            duration: formatDuration(duration),
            totalFiles: stats.totalFiles,
            completedFiles: stats.completedCount,
            failedFiles: stats.failedCount,
            successRate: `${successRate}%`,
            status: stats.status,
            sourceProvider: sourceAdapter.adapter_type,
            destinationProvider: destinationAdapter.adapter_type,
          },
          `✅ Migration ${stats.status.toLowerCase()}\n${table}`,
        );
      }
    } catch (error: any) {
      const duration = Date.now() - startTime;
      logger.error(
        {
          migrationId: job.data?.migrationId,
          userId: job.data?.userId,
          jobId: job.id,
          duration: formatDuration(duration),
          error: error.message,
        },
        `❌ Migration failed after ${formatDuration(duration)}: ${error.message}`,
      );
      // Note: In a production system, you might want to update migration status to FAILED here
    }
  },
  {
    connection: redis,
  },
);

console.log('Migration worker is running');
