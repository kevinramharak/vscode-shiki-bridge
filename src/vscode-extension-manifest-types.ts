/**
 * local copy of type `ExtensionLanguage` from `vscode-extension-manifest`
 * We use a local copy, because we only use some of the types, and we dont want to force consumers to have to install a dependency that isnt used
 */
export type ExtensionLanguage = {
  aliases?: string[];
  configuration?: string;
  extensions?: string[];
  filenamePatterns?: string[];
  filenames?: string[];
  firstLine?: string;
  id?: string;
  mimetypes?: string[];
  icon?: {
    dark: string;
    light: string;
  };
};
