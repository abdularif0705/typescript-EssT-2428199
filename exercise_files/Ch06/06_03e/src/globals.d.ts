declare global {
  /** this formats a date value to a human-readable format */
  function formatDate(date: Date): string;
}

export {}; // this is needed to make sure the file is treated as a module otherwise the global declaration will be ignored
