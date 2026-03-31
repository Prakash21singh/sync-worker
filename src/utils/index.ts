import { getExportConfig } from './export-type';
export { default as logger } from './logger';

export function generateFileConfig(
  mime: string | null,
  path: string,
  filename: string,
) {
  if (!mime) {
    let ext = path.slice(path.lastIndexOf('.'));
    return {
      mimeType: getExportMimeTypeFromExtension(ext),
      generatedPath: path,
    };
  }
  const isGoogleDoc = mime.startsWith('application/vnd.google-apps');
  const isOfficeDoc = mime.startsWith(
    'application/vnd.openxmlformats-officedocument',
  );

  let mimeType = mime;
  let generatedPath = `/${path || filename}`;

  if (isGoogleDoc) {
    const config = getExportConfig(mime);

    mimeType = config.exportMime!;
    generatedPath = `/${path || filename}${config.extension}`;
  }

  if (isOfficeDoc) {
    const config = getExportConfig(mime);
    mimeType = config.exportMime ?? mime;
  }

  return {
    mimeType,
    generatedPath,
  };
}

export function getExportMimeTypeFromExtension(ext: string): string {
  const normalizedExt = ext.toLowerCase().startsWith('.')
    ? ext.toLowerCase()
    : `.${ext.toLowerCase()}`;

  const mimeTypes: Record<string, string> = {
    // Documents
    '.pdf': 'application/pdf',
    '.doc': 'application/msword',
    '.docx':
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    '.xls': 'application/vnd.ms-excel',
    '.xlsx':
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    '.ppt': 'application/vnd.ms-powerpoint',
    '.pptx':
      'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    '.txt': 'text/plain',
    '.csv': 'text/csv',
    '.rtf': 'application/rtf',

    // Images
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.bmp': 'image/bmp',
    '.ico': 'image/x-icon',
    '.tiff': 'image/tiff',

    // Audio
    '.mp3': 'audio/mpeg',
    '.wav': 'audio/wav',
    '.ogg': 'audio/ogg',
    '.aac': 'audio/aac',
    '.flac': 'audio/flac',

    // Video
    '.mp4': 'video/mp4',
    '.mkv': 'video/x-matroska',
    '.mov': 'video/quicktime',
    '.avi': 'video/x-msvideo',
    '.wmv': 'video/x-ms-wmv',
    '.webm': 'video/webm',

    // Archives
    '.zip': 'application/zip',
    '.rar': 'application/vnd.rar',
    '.7z': 'application/x-7z-compressed',
    '.tar': 'application/x-tar',
    '.gz': 'application/gzip',

    // Code / Web
    '.json': 'application/json',
    '.xml': 'application/xml',
    '.html': 'text/html',
    '.htm': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.ts': 'application/typescript',

    // Fonts
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.otf': 'font/otf',

    // Misc
    '.apk': 'application/vnd.android.package-archive',
    '.exe': 'application/vnd.microsoft.portable-executable',
    '.bin': 'application/octet-stream',
  };

  return mimeTypes[normalizedExt] || 'application/octet-stream'; // fallback
}
