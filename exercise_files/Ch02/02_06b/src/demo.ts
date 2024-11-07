// TypeScript's most powerful feature is generics
interface Contact {
  id: number;
  name: string;
}

interface Task<T> {
  // Define properties and methods for Task
  result: T;
  execute(): void;
}

// TODO: how does this even work with generics in the interface??
interface UserContact<TExternalId> {
  id: number;
  name: string;
  username: string;
  externalId: TExternalId;
  loadExternalId(): Task<TExternalId>;
}

// function clone<T>(source: T): T {
//   return Object.apply({}, source);
// }

function clone<T1, T2 extends T1>(source: T1): T2 {
  // T2 extends T1 means the second parameter we pass in can be anything as long as it has all the properties in the T1 type. It DOESN'T have to literally extend T1 using the extends keyword.  It only has to match it and then add any other properties that it likes. In this example, I've created an entirely new UserContact that has all properties that Contact type has
  return Object.apply({}, source);
}

const a: Contact = { id: 123, name: "Homer Simpson" };
// const b = clone(a); // by hovering over this clone method int this line u can see that TS continues determining the right type when we pass into the generic funciton
const b = clone<Contact, UserContact<number>>(a); // after adding the <T1, T2> to the clone function above we can specify the types we will pass because TS will have a hard time inferring it by itself

const dateRange = { startDate: Date.now(), endDate: Date.now() };
const dateRangeCopy = clone(dateRange);

// Example usage with a string externalId
const userContactString: UserContact<string> = {
  id: 1,
  name: "John Doe",
  username: "johndoe",
  externalId: "abc123",
  loadExternalId: () => ({
    result: "abc123",
    execute: () => console.log("Executing task with string ID"),
  }),
};

// Example usage with a number externalId
const userContactNumber: UserContact<number> = {
  id: 2,
  name: "Jane Smith",
  username: "janesmith",
  externalId: 456,
  loadExternalId: () => ({
    result: 456,
    execute: () => console.log("Executing task with number ID"),
  }),
};
