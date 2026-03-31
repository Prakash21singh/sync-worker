# Syync — Developer Documentation

Syync is a cloud storage migration and sync platform. It enables bi-directional file migration between cloud providers with a job-queue architecture built on BullMQ and PostgreSQL.

---

## Provider Documentation

| Provider      | Status         | Doc                                  |
| ------------- | -------------- | ------------------------------------ |
| Google Drive  | ✅ Production  | [google-drive.md](./google-drive.md) |
| Dropbox       | ✅ Production  | [dropbox.md](./dropbox.md)           |
| AWS S3        | 🚧 In Progress | [aws-s3.md](./s3.md)                 |
| OneDrive      | 📋 Planned     | —                                    |
| iCloud Drive  | 📋 Planned     | —                                    |
| Google Photos | 📋 Planned     | —                                    |

---

## Adding a New Provider

See [providers/adding-a-provider.md](./providers/adding-a-provider.md) for the full step-by-step integration guide, required interface implementations, and the provider capability matrix.

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────┐
│                   BullMQ Queues                      │
│   DISCOVERY_QUEUE         MIGRATION_QUEUE            │
└────────────┬──────────────────────┬─────────────────┘
             │                      │
     ┌───────▼──────┐      ┌────────▼───────┐
     │  Discovery   │      │   Migration    │
     │   Worker     │      │    Worker      │
     └───────┬──────┘      └────────┬───────┘
             │                      │
     ┌───────▼──────────────────────▼───────┐
     │           Adapter Factory             │
     │  getAdapter(AdapterType) →            │
     │  GoogleDriveAdapter | DropboxAdapter  │
     │  | AWSS3Adapter | ...                 │
     └───────┬──────────────────────┬────────┘
             │                      │
     ┌───────▼──────┐      ┌────────▼────────┐
     │    Source    │      │   Destination   │
     │   Adapter    │      │    Adapter      │
     └───────┬──────┘      └────────┬────────┘
             │                      │
     ┌───────▼──────────────────────▼────────┐
     │              PostgreSQL                │
     │  Migration · MigrationFile · Adapter  │
     └────────────────────────────────────────┘
```

### Key Concepts

**Discovery phase** — The discovery worker calls `listFiles()` on the source adapter and stores all discovered files as `MigrationFile` records with status `PENDING`.

**Migration phase** — The migration worker iterates over `PENDING` files. For each file it calls `downloadFile()` on the source adapter and `uploadFile()` on the destination adapter, updating status to `COMPLETED` or `FAILED`.

**Adapter pattern** — Every provider implements `BaseStorageAdapter` (or `FolderSupportingAdapter` for hierarchical storage). The migration workers are provider-agnostic — they only interact with adapters through the shared interface.

**Token rotation** — OAuth tokens are validated and refreshed before every API call via `validateAndRotateToken`. API key providers (S3) skip this step.

---

## Database Models

| Model                | Purpose                                                  |
| -------------------- | -------------------------------------------------------- |
| `User`               | Platform user                                            |
| `Adapter`            | Cloud provider connection (stores credentials + tokens)  |
| `Migration`          | A migration job between source and destination adapters  |
| `MigrationFile`      | Individual file within a migration, with status tracking |
| `MigrationSelection` | User-selected files/folders to include in a migration    |
