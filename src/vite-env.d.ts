/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CONTACT_FORM_ACTION?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
