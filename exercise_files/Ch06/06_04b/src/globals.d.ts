declare global {
  /** this is my custom global variable */
  interface Window {
    MY_VAR: string;
  }
}

export {}; // this is needed to make sure the file is treated as a module otherwise the global declaration will be ignored
