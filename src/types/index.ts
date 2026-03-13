// you need to get all the files from the source adapter example Google drive
export interface GoogleDriveFile {
  id: string;
  parents: string[];
  name: string;
  mimeType: string;
  size: string;
}

export interface StorageAdapter {
  downloadFile(
    mimeType: string,
    fileId: string,
    accessToken: string,
    exportType: string | null,
  ): Promise<ReadableStream | null>;

  uploadFile(
    stream: ReadableStream | NodeJS.ReadableStream,
    pathname: string,
    accessToken: string,
  ): Promise<any>;

  createFolder(args: { parentPath: string; accessToken: string }): Promise<any>;

  /**
   * @description Returns the array of containing files and
   * @param args
   */
  listFiles(args: {
    parentSource: string;
    parentPath: string | null;
    access_token: string;
  }): Promise<any[]>;
}
