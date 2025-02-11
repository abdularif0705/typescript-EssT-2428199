// doesn't matter what we name the .d.ts file, as long as it's in the root of the src directory
// this tells TS everything I write in this braces should be available in the global namespace
declare global {
  /** this formats a date-value to a human readable format */ // this is a JSDoc comment and when you hover over the function in VSCode, you'll see this documentation comment
  function formatDate(date: Date): string;
  {
  }
}

export {}; // this tells TS that this is a module and not a script
