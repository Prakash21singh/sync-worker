import {
  ListObjectsV2Command,
  S3Client,
  GetObjectCommand,
  type _Object,
} from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';
import type {
  AdapterType,
  BaseStorageAdapter,
  MigrationFilePayload,
  S3CreateObjectRequest,
  S3DownloadRequest,
  S3ListObjectRequest,
  Adapter,
  Migration,
} from '../types';
import { normalizeS3Objects } from '../utils/mapping';
import { retryWithBackoff } from '../utils/function';

export class AWS_S3 implements BaseStorageAdapter<
  S3DownloadRequest,
  S3CreateObjectRequest,
  S3ListObjectRequest
> {
  adapterType: 'AWS_S3' = 'AWS_S3';

  buildDownloadRequest(
    file: MigrationFilePayload,
    adapter: Adapter,
    migration: Migration,
  ): S3DownloadRequest {
    return {
      accessKeyId: adapter.accessKeyId!,
      accessSecretKey: adapter.accessKeySecret!,
      region: adapter.region!,
      bucket: migration.bucket!,
      key: file.sourceId,
    };
  }

  buildUploadRequest(
    file: MigrationFilePayload,
    data: Uint8Array,
    adapter: Adapter,
    migration: Migration,
    folderIdMap: Map<string, string>,
  ): S3CreateObjectRequest {
    const request: S3CreateObjectRequest = {
      accessKeyId: adapter.accessKeyId!,
      accessSecretKey: adapter.accessKeySecret!,
      region: adapter.region!,
      bucket: migration.bucket!,
      key: file.path!,
      body: data,
    };

    if (file.mimeType) {
      request.contentType = file.mimeType;
    }

    return request;
  }

  async downloadFile(params: S3DownloadRequest): Promise<Uint8Array> {
    const { accessKeyId, accessSecretKey, region, bucket, key } = params;

    const doDownload = async () => {
      const s3Client = new S3Client({
        credentials: {
          accessKeyId,
          secretAccessKey: accessSecretKey,
        },
        region,
      });

      const response = await s3Client.send(
        new GetObjectCommand({
          Bucket: bucket,
          Key: key,
        }),
      );

      if (!response.Body) {
        throw new Error(`No body returned for S3 object ${key}`);
      }

      // Convert stream to Uint8Array
      const stream = response.Body as any; // Readable in Node.js
      const chunks: Uint8Array[] = [];
      for await (const chunk of stream) {
        chunks.push(new Uint8Array(chunk));
      }
      return Buffer.concat(chunks);
    };

    return retryWithBackoff(doDownload, 4, 500);
  }

  async listFiles(params: S3ListObjectRequest): Promise<any[]> {
    const { accessKeyId, accessSecretKey, region, bucket, prefix } = params;

    let objects: _Object[] = [];

    let ContinuationToken: string | undefined = undefined;

    do {
      const s3Client = new S3Client({
        credentials: {
          accessKeyId,
          secretAccessKey: accessSecretKey,
        },
        region,
      });

      const response = await s3Client.send(
        new ListObjectsV2Command({
          Bucket: bucket,
          Prefix: prefix,
          ContinuationToken,
        }),
      );

      if (response.Contents !== undefined) {
        objects.push(...response.Contents);
      }

      ContinuationToken = response.NextContinuationToken as string | undefined;
    } while (ContinuationToken);

    const files = normalizeS3Objects(objects);

    return files;
  }

  async uploadFile(params: S3CreateObjectRequest): Promise<any> {
    const {
      accessKeyId,
      accessSecretKey,
      region,
      bucket,
      key,
      body,
      contentType,
    } = params;

    const doUpload = async () => {
      const upload = new Upload({
        client: new S3Client({
          credentials: {
            accessKeyId,
            secretAccessKey: accessSecretKey,
          },
          region,
        }),
        params: {
          Bucket: bucket,
          Key: key,
          Body: body,
          ContentType: contentType,
        },
      });

      return await upload.done();
    };

    return retryWithBackoff(doUpload, 4, 1000);
  }
}
