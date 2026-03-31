# Adding a New Provider to Syync

This guide is the canonical reference for integrating a new cloud storage provider. Follow every section in order. Each new provider must conform to the patterns established by Google Drive and Dropbox — deviations must be documented with a reason.

---

## Pre-Integration Checklist

Before writing any code, confirm the following:

- [ ] The provider has a public API (REST or SDK)
- [ ] OAuth 2.0 or API key auth is supported
- [ ] File listing (with pagination) is available
- [ ] File download is available
- [ ] File upload is available
- [ ] You have API credentials for local development

---

## Step 1 — Add the Adapter Type

In `types/index.ts`, add the new provider to the `AdapterType` union:

```typescript
// Before
type AdapterType = 'GOOGLE_DRIVE' | 'DROPBOX' | 'AWS_S3';

// After
type AdapterType = 'GOOGLE_DRIVE' | 'DROPBOX' | 'AWS_S3' | 'YOUR_PROVIDER';
```

Also update the Prisma schema `AdapterType` enum in `prisma/schema.prisma` and run `npx prisma generate`.

---

## Step 2 — Add Environment Variables

Add all required environment variables to your `.env` file and document them here and in the provider's doc file.

```env
# Your Provider
YOUR_PROVIDER_BASE_URL=
YOUR_PROVIDER_CLIENT_ID=
YOUR_PROVIDER_CLIENT_SECRET=
YOUR_PROVIDER_REFRESH_TOKEN_URL=     # if OAuth
```

---

## Step 3 — Create the Adapter File

Create `src/service/your-provider.ts`. Use this skeleton:

```typescript
import type {
  BaseStorageAdapter,
  FolderSupportingAdapter,
  NormalizedFile,
  MigrationFilePayload,
} from '../types/index.js';
import { validateAndRotateToken } from '../utils/function.js';
import { retryWithBackoff } from '../utils/function.js';

// Use FolderSupportingAdapter if the provider has real folder concepts
// Use BaseStorageAdapter if it is flat object storage (like S3)
export class YourProviderAdapter implements FolderSupportingAdapter<
  YourDownloadParams,
  YourUploadParams,
  YourCreateFolderParams,
  YourListFilesParams
> {
  adapterType = 'YOUR_PROVIDER' as const;
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  // ─── LIST FILES ──────────────────────────────────────────────────────
  async listFiles(params: YourListFilesParams): Promise<NormalizedFile[]> {
    // 1. Validate and rotate token if OAuth
    // 2. Fetch file list with pagination
    // 3. Normalize via normalizeYourProviderFiles() in utils/mapping.ts
    // 4. Return NormalizedFile[]
    throw new Error('Not implemented yet');
  }

  // ─── DOWNLOAD FILE ───────────────────────────────────────────────────
  async downloadFile(params: YourDownloadParams): Promise<Uint8Array> {
    // 1. Validate and rotate token
    // 2. Fetch file bytes
    // 3. Return as Uint8Array
    // Wrap in retryWithBackoff for rate limit resilience
    throw new Error('Not implemented yet');
  }

  // ─── UPLOAD FILE ─────────────────────────────────────────────────────
  async uploadFile(params: YourUploadParams): Promise<any> {
    // 1. Validate and rotate token
    // 2. Upload file bytes to destination path/ID
    // 3. Handle conflict (see conflict strategy below)
    // Wrap in retryWithBackoff
    throw new Error('Not implemented yet');
  }

  // ─── CREATE FOLDER ───────────────────────────────────────────────────
  async createFolder(
    params: YourCreateFolderParams,
  ): Promise<{ id: string } | null> {
    // 1. Validate and rotate token
    // 2. Create folder at destination
    // 3. Return { id: newFolderId }
    throw new Error('Not implemented yet');
  }

  // ─── REQUEST BUILDERS ────────────────────────────────────────────────
  buildDownloadRequest(
    file: MigrationFilePayload,
    token: string,
  ): YourDownloadParams {
    // Map MigrationFilePayload → provider-specific download params
    throw new Error('Not implemented yet');
  }

  buildUploadRequest(
    file: MigrationFilePayload,
    data: Uint8Array,
    token: string,
    folderIdMap: Map<string, string>,
  ): YourUploadParams {
    // Map MigrationFilePayload + bytes → provider-specific upload params
    throw new Error('Not implemented yet');
  }
}
```

---

## Step 4 — Implement Data Normalization

In `utils/mapping.ts`, add a normalization function for the new provider:

```typescript
export function normalizeYourProviderFiles(
  rawFiles: YourProviderFileObject[],
  migrationId: string,
): NormalizedFile[] {
  return rawFiles.map((entry) => ({
    id: generateId(), // internal DB ID
    sourceId: entry.id, // provider-specific file/object ID
    name: entry.name,
    type: entry.isFolder ? 'FOLDER' : 'FILE',
    mimeType: entry.mimeType ?? null,
    size: entry.size ?? null,
    path: entry.path ?? null,
    migrationId,
  }));
}
```

**Required fields** — every provider must populate all fields of `NormalizedFile`. If the provider does not return a field (e.g. Dropbox has no MIME type), set it to `null` and document it.

---

## Step 5 — Register in the Adapter Factory

In `src/service/adapter-factory.ts`, add the new provider to the factory:

```typescript
import { YourProviderAdapter } from './your-provider.js';

export class AdapterFactory {
  static getAdapter(type: AdapterType) {
    switch (type) {
      case 'GOOGLE_DRIVE':
        return new GoogleDriveAdapter(process.env.GOOGLE_DRIVE_BASE_URL!);
      case 'DROPBOX':
        return new DropboxAdapter(process.env.DROPBOX_BASE_URL!);
      case 'AWS_S3':
        return new AWSS3Adapter();
      case 'YOUR_PROVIDER':
        return new YourProviderAdapter(process.env.YOUR_PROVIDER_BASE_URL!);
      default:
        throw new Error(`Unknown adapter type: ${type}`);
    }
  }
}
```

---

## Step 6 — Implement Required Behaviors

Every adapter **must** implement these behaviors before it can be used in production migrations:

### Token Rotation (OAuth providers)

Call `validateAndRotateToken` at the start of every method that makes an API call. Do not cache the token locally inside the adapter instance — always fetch fresh from the database.

### Retry with Backoff

Wrap all external API calls in `retryWithBackoff(fn, 4, 500)` — 4 attempts with 500ms base delay. This handles transient rate limits and network errors consistently across providers.

### Conflict Strategy

Choose one of the following and document it in the provider's doc file:

| Strategy     | Behavior                                       | When to Use                                 |
| ------------ | ---------------------------------------------- | ------------------------------------------- |
| `autorename` | Append ` (1)`, ` (2)` etc. to avoid overwrites | Default for most migrations                 |
| `overwrite`  | Replace the destination file silently          | When re-running a migration for idempotency |
| `skip`       | Do not upload if a file already exists         | When preserving destination data            |

### Error Handling

Handle these cases explicitly:

```typescript
// Rate limit
if (response.status === 429) → retryWithBackoff

// Auth failure
if (response.status === 401) → rotate token, retry once

// Not found
if (response.status === 404) → mark MigrationFile as FAILED, continue

// Server error
if (response.status >= 500) → retryWithBackoff, then mark FAILED
```

---

## Step 7 — Write Provider Documentation

Create `docs/providers/your-provider.md` using the structure below. All sections are required.

```markdown
# [Provider Name] Provider

## Overview

<!-- Adapter type, auth method, interface implemented -->

## Authentication

<!-- Token fields, rotation behavior, required env vars -->

## Supported Operations

<!-- Table of operations with ✅ / 🚧 / ❌ / ➖ status -->

## File Listing

<!-- Endpoint, pagination, normalized shape -->

## Path Conventions

<!-- How paths are represented (absolute, relative, key-based) -->

## File Upload

<!-- Endpoint, conflict strategy, large file behavior -->

## Folder Handling

<!-- Does the provider support real folders? If not, how are they simulated? -->

## Error Handling

<!-- Per-error behavior table -->

## Known Gaps & Future Work

<!-- Honest list of what's missing or deferred -->
```

---

## Provider Capability Matrix

Keep this table updated as providers are added.

| Capability      | Google Drive | Dropbox | AWS S3 | OneDrive | iCloud | Google Photos |
| --------------- | :----------: | :-----: | :----: | :------: | :----: | :-----------: |
| List files      |      ✅      |   ✅    |   ✅   |          |        |               |
| Download file   |      ✅      |   ✅    |   🚧   |          |        |               |
| Upload file     |      ✅      |   ✅    |   🚧   |          |        |               |
| Create folder   |      ✅      |   ✅    |   ➖   |          |        |               |
| Delete file     |      ❌      |   ❌    |   ❌   |          |        |               |
| Move/rename     |      ❌      |   ❌    |   ❌   |          |        |               |
| Real-time watch |      ❌      |   ❌    |   ❌   |          |        |               |
| Chunked upload  |      ❌      |   ❌    |   ❌   |          |        |               |
| OAuth auth      |      ✅      |   ✅    |   ➖   |          |        |               |
| API key auth    |      ➖      |   ➖    |   ✅   |          |        |               |

**Legend:** ✅ Implemented · 🚧 In progress · ❌ Not implemented · ➖ Not applicable

---

## Provider-Specific Notes for Planned Integrations

### OneDrive

- Uses Microsoft Identity Platform (OAuth 2.0 with MSAL)
- Graph API: `https://graph.microsoft.com/v1.0/me/drive`
- Supports delta sync via `/delta` endpoint — priority to implement for incremental sync
- Folder creation and hierarchical paths work similarly to Google Drive

### iCloud Drive

- No official public API — integration requires Apple's CloudKit or iCloud Drive entitlements
- Third-party access is limited; investigate rclone's iCloud implementation for approach
- Consider whether WebDAV access (via third-party tools) is a viable interim path

### Google Photos

- Separate API from Google Drive (`photoslibrary.googleapis.com`)
- OAuth 2.0 — can reuse the token rotation pattern from Google Drive
- Upload requires a two-step process: create upload token, then create media item
- No folder concept — photos are organized into Albums
- Read-only access to items not uploaded by your app (API restriction)
