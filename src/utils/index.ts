import { getExportConfig } from './export-type';

export function generateFileConfig(mime: string, path: string, filename: string) {
  const isGoogleDoc = mime.startsWith('application/vnd.google-apps');
  const isOfficeDoc = mime.startsWith('application/vnd.openxmlformats-officedocument');

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
