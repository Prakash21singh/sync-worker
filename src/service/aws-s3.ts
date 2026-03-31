import {
  ListObjectsV2Command,
  S3Client,
  type _Object,
} from '@aws-sdk/client-s3';
import type {
  AdapterType,
  MigrationFilePayload,
  S3CreateObjectRequest,
  S3DownloadRequest,
  S3ListObjectRequest,
  StorageAdapter,
} from '../types';
import { normalizeS3Objects } from '../utils/mapping';

export class AWS_S3 implements StorageAdapter<
  S3DownloadRequest,
  S3CreateObjectRequest,
  null,
  S3ListObjectRequest
> {
  adapterType: 'AWS_S3' = 'AWS_S3';

  buildDownloadRequest?: (
    file: MigrationFilePayload,
    token: string,
  ) => S3DownloadRequest;

  buildUploadRequest?: (
    file: MigrationFilePayload,
    data: Uint8Array,
    token: string,
    folderIdMap: Map<string, string>,
  ) => S3CreateObjectRequest;


  downloadFile(params: S3DownloadRequest): Promise<Uint8Array> {
    throw new Error('Not implemented yet!');
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

  uploadFile(params: S3CreateObjectRequest): Promise<any> {
    throw new Error('Not implemented yet!');
  }
}


