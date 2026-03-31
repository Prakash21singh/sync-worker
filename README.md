# Syync Worker - Cloud Storage Migration Platform

## 1. PROJECT ARCHITECTURE

### Top-Level Folder Structure

- `package.json` - Node.js project with TypeScript, dependencies: Prisma (PostgreSQL), BullMQ (Redis), AWS SDK, Pino logging
- `prisma/schema.prisma` - Database schema with User, Adapter, Migration, MigrationFile, MigrationSelection models
- `src/` - Main source code
  - `worker.ts` - BullMQ worker for migration jobs
  - `discovery-worker.ts` - BullMQ worker for file discovery from source adapter
  - `lib/` - Shared libraries (Prisma client, Redis connection)
  - `queries/` - Database query functions (adapter.ts, migration.ts)
  - `queue/` - BullMQ queue setup (migration-queue.ts)
  - `service/` - Provider adapters (adapter-factory.ts, google-drive.ts, dropbox.ts, aws-s3.ts)
  - `types/index.ts` - Shared TypeScript interfaces and types
  - `utils/` - Shared utilities (function.ts for token rotation, mapping.ts for data normalization, logger.ts, export-type.ts)

### Framework/Runtime

- **Runtime**: Node.js with ES modules (`"type": "module"`)
- **Language**: TypeScript
- **Database**: PostgreSQL via Prisma ORM
- **Job Queue**: BullMQ with Redis
- **HTTP Client**: Native fetch API
- **Logging**: Pino logger

### Project Organization

- **Modular monorepo**: Single repository with clear separation of concerns
- **Adapter pattern**: Each cloud provider (Google Drive, Dropbox, S3) implements a standardized interface
- **Worker-based architecture**: Separate workers for discovery and migration tasks
- **Database-driven state**: All sync operations tracked in PostgreSQL

### Core Shared Modules/Utilities

- `AdapterFactory` (service/adapter-factory.ts) - Factory for creating provider-specific adapter instances
- `BaseStorageAdapter` interface (types/index.ts) - Contract all adapters must implement
- Token rotation utilities (utils/function.ts) - OAuth token refresh logic
- Data mapping functions (utils/mapping.ts) - Normalize provider-specific objects to `NormalizedFile`
- Retry logic with backoff (utils/function.ts) - `retryWithBackoff` function for API resilience
- File configuration utilities (utils/index.ts) - MIME type handling and export configs

## 2. PROVIDER INTEGRATION PATTERN

### Google Drive (service/google-drive.ts)

#### Auth Flow

- OAuth 2.0 with access_token/refresh_token stored in Adapter model
- Token rotation handled by `validateAndRotateToken` (utils/function.ts) when `expires_in` is near expiry
- Refresh endpoint: `process.env.GOOGLE_REFRESH_TOKEN_URL`
- Credentials: `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` from env

#### API Client Setup

- HTTP-based using native fetch
- Base URL: `process.env.GOOGLE_DRIVE_BASE_URL` (constructor parameter)
- Authorization: `Bearer ${accessToken}` header
- Multipart upload for files with metadata

#### Core Operations Implemented

- **List files/folders**: `listFiles()` - Queries Drive API with `q: "'${parentSource}' in parents and trashed=false"`, paginates with `nextPageToken`
- **Upload file**: `uploadFile()` - Multipart upload to `/upload/drive/v3/files?uploadType=multipart`
- **Download file**: `downloadFile()` - GET to `/${fileId}?alt=media` or `/${fileId}/export?mimeType=...` for Google Docs
- **Create folder**: `createFolder()` - POST to base URL with `mimeType: 'application/vnd.google-apps.folder'`
- **Delete file**: Not implemented
- **Move/rename file**: Not implemented
- **Watch/webhook**: Not implemented

#### Sync Logic

- Sync triggered via BullMQ jobs in `worker.ts`
- Discovery phase in `discovery-worker.ts` fetches all files from source adapter
- Migration phase uploads files to destination adapter

#### Conflict Resolution

- No explicit conflict resolution - relies on provider's default behavior
- Upload uses `autorename: true` in Dropbox, but Google Drive doesn't specify

#### Data Mapping

- `listFiles()` returns normalized objects with `type: 'FOLDER' | 'FILE'`, `sourceId`, `name`, `size`, `mimeType`
- Google Docs export to PDF by default via `getExportConfig()` (utils/export-type.ts)
- Path reconstruction from `parents` array (not implemented in current code)

#### Error Handling

- Rate limits (429) retried with backoff via `retryWithBackoff(fetchFn, 4, 500)`
- Token expiry handled by rotation middleware
- API errors throw with status and response text

#### File/Folder Path Conventions

- Paths not fully implemented - `buildUploadRequest` constructs parent paths from `file.path.split('/')` but Google Drive uses `parents` array
- Root folder has no parent ID

### Dropbox (service/dropbox.ts)

#### Auth Flow

- OAuth 2.0 with access_token/refresh_token
- Token rotation same as Google Drive
- Refresh endpoint: `process.env.DROPBOX_REFRESH_TOKEN_URL` (inferred from code)
- Credentials: `DROPBOX_APP_KEY`, `DROPBOX_APP_SECRET` from env

#### API Client Setup

- HTTP-based using fetch
- Base URL: `process.env.DROPBOX_BASE_URL` (constructor)
- Authorization: `Bearer ${accessToken}`
- Content-Type: `application/octet-stream` for uploads

#### Core Operations Implemented

- **List files/folders**: `listFiles()` - POST to `/list_folder` with `path: parentPath`, recursive via `list_folder/continue`
- **Upload file**: `uploadFile()` - POST to `/upload` with `Dropbox-API-Arg` header containing path and mode
- **Download file**: `downloadFile()` - POST to `/download` with `Dropbox-API-Arg: {"path": "/file/path"}`
- **Create folder**: `createFolder()` - POST to `/create_folder` endpoint
- **Delete file**: Not implemented
- **Move/rename file**: Not implemented
- **Watch/webhook**: Not implemented

#### Sync Logic

- Same as Google Drive - job-based via BullMQ

#### Conflict Resolution

- Upload uses `mode: 'add'`, `autorename: true`, `strict_conflict: false` - adds new version/copy on conflict

#### Data Mapping

- `normalizeDropboxFiles()` (utils/mapping.ts) maps Dropbox entries to normalized format
- `path_display` used as path, `name`, `size`, `id` as `sourceId`
- Type: `entry['.tag'] === 'file' ? 'FILE' : 'FOLDER'`

#### Error Handling

- Rate limits retried with `retryWithBackoff(doUpload, 4, 400)`
- API errors include status and response text

#### File/Folder Path Conventions

- Paths are absolute with leading `/` (e.g., `/folder/file.txt`)
- `path_display` from API used directly as path

## 3. SHARED INTERFACES & TYPES

### Universal/Normalized File Object Schema

```typescript
interface NormalizedFile {
  id: string;
  sourceId: string; // Provider-specific ID
  name: string;
  type: 'FILE' | 'FOLDER';
  mimeType: string | null;
  size: string | number | null;
  path: string | null; // Normalized path
  migrationId: string;
}
```

### Provider Interface/Contract

```typescript
interface BaseStorageAdapter<TDownloadParams, TUploadParams, TListFilesParams> {
  adapterType: AdapterType;
  downloadFile(params: TDownloadParams): Promise<Uint8Array>;
  uploadFile(params: TUploadParams): Promise<any>;
  listFiles(params: TListFilesParams): Promise<any[]>;
  // Optional builders for request params
  buildDownloadRequest?: (
    file: MigrationFilePayload,
    token: string,
  ) => TDownloadParams;
  buildUploadRequest?: (
    file: MigrationFilePayload,
    data: Uint8Array,
    token: string,
    folderIdMap: Map<string, string>,
  ) => TUploadParams;
}

interface FolderSupportingAdapter<
  TDownloadParams,
  TUploadParams,
  TCreateFolderParams,
  TListFilesParams,
> extends BaseStorageAdapter<TDownloadParams, TUploadParams, TListFilesParams> {
  createFolder(params: TCreateFolderParams): Promise<{ id: string } | null>;
}
```

### Enums/Constants/Config Values

- `AdapterType`: `'GOOGLE_DRIVE' | 'DROPBOX' | 'AWS_S3'`
- `MigrationFileStatus`: From Prisma enum (PENDING, IN_PROGRESS, COMPLETED, FAILED)
- Export configs in `utils/export-type.ts` for Google Docs MIME types

### Shared Queue/Job Types

- `MigrationJobBody`: `{ userId: string; migrationId: string }`
- Queues: `process.env.MIGRATION_QUEUE_NAME` and `process.env.DISCOVERY_QUEUE_NAME`

## 4. SYNC ENGINE

### Coordination Between Providers

- `AdapterFactory.getAdapter(type)` creates source/destination adapter instances
- Discovery worker (`discovery-worker.ts`) fetches all files from source adapter
- Migration worker (`worker.ts`) processes each file: downloads from source, uploads to destination
- State tracked in database: Migration status, MigrationFile status

### Job/Task Lifecycle

- **Queued**: Jobs added to BullMQ queues
- **In Progress**: Worker picks up job, updates Migration.status to 'DISCOVERING'/'MIGRATING'
- **Complete/Failed**: MigrationFile.status updated per file, Migration.status on completion

### Delta/Incremental Sync

- No delta sync implemented - always full discovery and migration
- `findMigrationSelections` allows selecting specific files/folders to migrate

### Large Files/Batch Operations

- Files processed individually, no batching
- Large files handled by streaming (Uint8Array in memory)
- No chunking or resumable uploads

### Database/State Tracking Schema

- `Migration`: Tracks sync job (sourceAdapterId, destinationAdapterId, status, userId)
- `MigrationFile`: Tracks each file (migrationId, sourceFileId, path, status, size)
- `MigrationSelection`: User-selected files/folders to include in migration

## 5. CONFIGURATION & ENVIRONMENT

### Required Environment Variables

- **Database**: `DATABASE_URL` (PostgreSQL)
- **Redis**: `REDIS_URL`
- **Queues**: `MIGRATION_QUEUE_NAME`, `DISCOVERY_QUEUE_NAME`
- **Google Drive**: `GOOGLE_DRIVE_BASE_URL`, `GOOGLE_DRIVE_FILE_UPLOAD_URL`, `GOOGLE_REFRESH_TOKEN_URL`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`
- **Dropbox**: `DROPBOX_BASE_URL`, `DROPBOX_BASE_FOLDER_API`, `DROPBOX_REFRESH_TOKEN_URL`, `DROPBOX_APP_KEY`, `DROPBOX_APP_SECRET`
- **S3**: None required (credentials passed per adapter)

### Config File Schema

- No config file - all configuration via environment variables
- Credentials stored in database per Adapter record

### Credentials Storage/Access

- OAuth tokens: `access_token`, `refresh_token`, `expires_in` in Adapter table
- S3: `accessKeyId`, `accessKeySecret`, `region` in Adapter table
- Runtime access: `findAdapter()` queries database, tokens passed to adapter methods

## 6. TESTING PATTERNS

### Integration Testing

- No test files found in codebase
- No evidence of mocked, sandbox, or live testing

### Test Utilities/Fixtures

- None identified

## 7. CURRENT S3 INTEGRATION STATE

### Existing Implementation

- `AWS_S3` class (service/aws-s3.ts) implements `BaseStorageAdapter` (not `FolderSupportingAdapter`)
- Uses AWS SDK v3 (`@aws-sdk/client-s3`)

### Stubbed vs Implemented

- **Implemented**: `listFiles()` - Lists objects with `ListObjectsV2Command`, normalizes via `normalizeS3Objects()`
- **Stubbed**: `downloadFile()` and `uploadFile()` throw "Not implemented yet!"
- **Missing**: `buildDownloadRequest`, `buildUploadRequest` are optional and not implemented

### Divergence from Google/Dropbox Pattern

- No folder support (S3 is object storage, not hierarchical)
- No token rotation (uses API keys instead of OAuth)
- Credentials passed per operation instead of stored tokens
- Path mapping: S3 keys used directly as paths, normalized names via `normalizeName()` (utils/function.ts)
- No retry logic implemented yet
- No error handling for rate limits or API errors
