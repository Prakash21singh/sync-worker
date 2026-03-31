# Dropbox Provider

## Overview

The Dropbox adapter enables file discovery and migration to/from Dropbox. It uses path-based addressing (rather than ID-based), which maps cleanly to a traditional file system hierarchy.

**Adapter Type:** `DROPBOX`  
**Auth Method:** OAuth 2.0 (access token + refresh token)  
**Implements:** `FolderSupportingAdapter`

---

## Authentication

Dropbox uses OAuth 2.0. Tokens are stored per `Adapter` record in the database.

| Field           | Description                                          |
| --------------- | ---------------------------------------------------- |
| `access_token`  | Short-lived Bearer token used in API requests        |
| `refresh_token` | Long-lived token used to obtain a new `access_token` |
| `expires_in`    | Expiry timestamp; token is rotated before it lapses  |

Token rotation is handled automatically by `validateAndRotateToken` (`utils/function.ts`) before each operation.

**Required Environment Variables**

```env
DROPBOX_BASE_URL=
DROPBOX_BASE_FOLDER_API=
DROPBOX_REFRESH_TOKEN_URL=
DROPBOX_APP_KEY=
DROPBOX_APP_SECRET=
```

---

## Supported Operations

| Operation        | Status             | Notes                                   |
| ---------------- | ------------------ | --------------------------------------- |
| `listFiles()`    | ✅ Implemented     | Paginates with `list_folder/continue`   |
| `downloadFile()` | ✅ Implemented     | Uses `Dropbox-API-Arg` header           |
| `uploadFile()`   | ✅ Implemented     | Octet-stream upload with path in header |
| `createFolder()` | ✅ Implemented     |                                         |
| `deleteFile()`   | ❌ Not implemented |                                         |
| `moveFile()`     | ❌ Not implemented |                                         |
| `watchChanges()` | ❌ Not implemented | Dropbox supports webhooks via longpoll  |

---

## File Listing

Files are listed using the `/list_folder` endpoint. All entries under a given path are returned. Pagination is handled automatically via `/list_folder/continue` using the returned cursor.

```typescript
// Request body
{
  path: "/your/folder/path",
  recursive: false
}
```

**Returned shape (normalized):**

```typescript
{
  id: string; // Internal DB ID
  sourceId: string; // Dropbox file ID (e.g. "id:abc123")
  name: string;
  type: 'FILE' | 'FOLDER';
  mimeType: string | null; // Dropbox does not return MIME types natively
  size: number | null;
  path: string | null; // Absolute path e.g. "/folder/file.txt"
  migrationId: string;
}
```

Normalization is handled by `normalizeDropboxFiles()` in `utils/mapping.ts`. The `.tag` field on each entry determines whether it is a `FILE` or `FOLDER`.

> **Note:** Dropbox does not return MIME types in list responses. MIME type is `null` unless inferred from the file extension.

---

## Path Conventions

Dropbox uses **absolute paths with a leading slash**:

```
/                         ← root
/documents/               ← folder
/documents/report.pdf     ← file
```

The `path_display` field from the API is used directly as the normalized path. This is the human-readable, case-preserved version of the path.

---

## File Upload

Files are uploaded to the `/upload` endpoint using:

- `Content-Type: application/octet-stream`
- `Dropbox-API-Arg` header containing the destination path and write mode

```json
{
  "path": "/destination/path/file.txt",
  "mode": "add",
  "autorename": true,
  "strict_conflict": false
}
```

**Conflict behavior:** `autorename: true` means if a file already exists at the destination path, Dropbox will automatically rename the new file (e.g. `file (1).txt`). Files are never overwritten silently.

> ⚠️ **Known Limitation:** Files are held in memory as `Uint8Array`. For large files, consider implementing Dropbox's [upload session API](https://www.dropbox.com/developers/documentation/http/documentation#files-upload_session-start) which supports chunked uploads up to 350GB.

---

## Folder Handling

Folders are created via the `/create_folder` endpoint before their contents are uploaded. The migration worker maintains a `folderIdMap` to map source folder paths to destination folder paths, preserving the full hierarchy.

---

## Error Handling

| Error                 | Behavior                                                             |
| --------------------- | -------------------------------------------------------------------- |
| HTTP 429 (rate limit) | Retried up to 4 times with 400ms base backoff via `retryWithBackoff` |
| Token expiry          | Automatically refreshed before the request is retried                |
| Other API errors      | Thrown with HTTP status and response text                            |

---

## Known Gaps & Future Work

- **Chunked/resumable uploads** are not implemented. Dropbox's upload session API supports files up to 350GB in chunks.
- **Delete and move** operations are not yet supported.
- **Webhooks** for real-time change detection are not yet implemented. Dropbox supports longpoll-based webhooks.
- **MIME type inference** from file extension could be added to improve interoperability with providers that require MIME types on upload (e.g. Google Drive).
