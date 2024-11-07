// TypeScript's most powerful feature is generics
interface Contact {
  id: number;
  name: string;
}

function clone<T>(source: T): T {
  return Object.apply({}, source);
}

const a: Contact = { id: 123, name: "Homer Simpson" };
const b = clone(a); // by hovering over this clone method int this line u can see that TS continues determining the right type when we pass into the generic funciton

const dateRange = { startDate: Date.now(), endDate: Date.now() };
const dateRangeCopy = clone(dateRange);
