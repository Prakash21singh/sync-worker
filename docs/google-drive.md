# Google Drive Provider

## Overview

The Google Drive adapter enables file discovery and migration to/from Google Drive. It supports standard files as well as Google Workspace documents (Docs, Sheets, Slides), which are exported to portable formats during migration.

**Adapter Type:** `GOOGLE_DRIVE`  
**Auth Method:** OAuth 2.0 (access token + refresh token)  
**Implements:** `FolderSupportingAdapter`

---

## Authentication

Google Drive uses OAuth 2.0. Tokens are stored per `Adapter` record in the database.

| Field           | Description                                          |
| --------------- | ---------------------------------------------------- |
| `access_token`  | Short-lived Bearer token used in API requests        |
| `refresh_token` | Long-lived token used to obtain a new `access_token` |
| `expires_in`    | Expiry timestamp; token is rotated before it lapses  |

Token rotation is handled automatically by `validateAndRotateToken` (`utils/function.ts`) before each operation. If the token is near expiry, it calls the refresh endpoint and updates the database.

**Required Environment Variables**

```env
GOOGLE_DRIVE_BASE_URL=
GOOGLE_DRIVE_FILE_UPLOAD_URL=
GOOGLE_REFRESH_TOKEN_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

---

## Supported Operations

| Operation        | Status             | Notes                                               |
| ---------------- | ------------------ | --------------------------------------------------- |
| `listFiles()`    | ✅ Implemented     | Paginates with `nextPageToken`                      |
| `downloadFile()` | ✅ Implemented     | Exports Google Docs to PDF by default               |
| `uploadFile()`   | ✅ Implemented     | Multipart upload with metadata                      |
| `createFolder()` | ✅ Implemented     | Uses `application/vnd.google-apps.folder` MIME type |
| `deleteFile()`   | ❌ Not implemented |                                                     |
| `moveFile()`     | ❌ Not implemented |                                                     |
| `watchChanges()` | ❌ Not implemented |                                                     |

---

## File Listing

Files are listed using the Drive API `files.list` endpoint. The query filters by parent folder and excludes trashed items:

```
q: "'${parentId}' in parents and trashed=false"
```

Pagination is handled automatically — the adapter follows `nextPageToken` until all files are fetched.

**Returned shape (normalized):**

```typescript
{
  id: string; // Internal DB ID
  sourceId: string; // Google Drive file ID
  name: string;
  type: 'FILE' | 'FOLDER';
  mimeType: string | null;
  size: string | null;
  path: string | null;
  migrationId: string;
}
```

---

## Google Workspace Documents

Google Docs, Sheets, and Slides cannot be downloaded as raw bytes — they must be exported. The adapter handles this automatically using `getExportConfig()` (`utils/export-type.ts`).

| Google MIME Type                           | Exported As       |
| ------------------------------------------ | ----------------- |
| `application/vnd.google-apps.document`     | `application/pdf` |
| `application/vnd.google-apps.spreadsheet`  | `application/pdf` |
| `application/vnd.google-apps.presentation` | `application/pdf` |

Export requests go to: `/{fileId}/export?mimeType={exportMimeType}`  
Standard file downloads go to: `/{fileId}?alt=media`

---

## File Upload

Files are uploaded using multipart upload. The request includes:

- A JSON metadata part (name, parent folder ID, MIME type)
- A binary data part (file bytes)

Upload endpoint: `/upload/drive/v3/files?uploadType=multipart`

> ⚠️ **Known Limitation:** Large files are held in memory as `Uint8Array`. Resumable uploads are not yet implemented. For files over ~50MB, this may cause memory pressure.

---

## Folder Handling

Folders are created before their contents are uploaded. The adapter maps source folder IDs to destination folder IDs using a `folderIdMap` passed through the migration worker. This ensures nested folder structures are preserved.

Folder creation uses the MIME type `application/vnd.google-apps.folder`.

---

## Error Handling

| Error                 | Behavior                                                             |
| --------------------- | -------------------------------------------------------------------- |
| HTTP 429 (rate limit) | Retried up to 4 times with 500ms base backoff via `retryWithBackoff` |
| Token expiry          | Automatically refreshed before the request is retried                |
| Other API errors      | Thrown with HTTP status and response text                            |

---

## Known Gaps & Future Work

- **Conflict resolution** is not explicitly handled. If a file with the same name exists in the destination folder, Google Drive will create a duplicate (it allows multiple files with the same name).
- **Path reconstruction** from the `parents` array is not fully implemented.
- **Delete, move, and watch** operations are not yet supported.
- **Resumable uploads** should be implemented for files above a configurable size threshold.
