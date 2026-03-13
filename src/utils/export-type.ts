type ExportConfig = {
  export: boolean;
  exportMime?: string;
  extension?: string;
};

export function getExportConfig(mimeType: string): ExportConfig {
  const map: Record<string, ExportConfig> = {
    'application/vnd.google-apps.document': {
      export: true,
      exportMime: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      extension: '.docx',
    },

    'application/vnd.google-apps.spreadsheet': {
      export: true,
      exportMime: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      extension: '.xlsx',
    },

    'application/vnd.google-apps.presentation': {
      export: true,
      exportMime: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      extension: '.pptx',
    },

    'application/vnd.google-apps.drawing': {
      export: true,
      exportMime: 'image/png',
      extension: '.png',
    },

    'application/vnd.google-apps.script': {
      export: true,
      exportMime: 'application/json',
      extension: '.json',
    },

    'application/vnd.google-apps.jam': {
      export: true,
      exportMime: 'application/pdf',
      extension: '.pdf',
    },

    'application/vnd.google-apps.site': {
      export: true,
      exportMime: 'text/html',
      extension: '.html',
    },
  };

  return map[mimeType] || { export: false };
}
