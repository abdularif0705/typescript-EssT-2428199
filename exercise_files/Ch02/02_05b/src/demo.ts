interface Contact {
  id: number;
  name: string;
  clone(name: string): Contact; // similar to the param func() below but we use : instead of => to specify it's return type
}

function clone(source: Contact, func: (source: Contact) => Contact): Contact {
  // we can specify the return type for the func: parameter we passed in too. We specify th ereturn type by using => it tells us that the func() inside returns type Contact
  return Object.apply({}, source);
}

const a: Contact = { id: 123, name: "Homer Simpson" };
const b = clone(a);
