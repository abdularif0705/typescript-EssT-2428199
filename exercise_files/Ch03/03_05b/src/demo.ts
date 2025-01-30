// let x: Record<string, string> = { name: "Wruce Bayne" }; // First value is generic property types and seconf value is gerneric property values. Allows you to have some structure without having to detail every little thing. TLDR: set define record with string properties and values. "name" is a string and it's value "Wruce Wayne" is also a string
let x: Record<string, string | number | boolean | Function> = {
  name: "Wruce Bayne",
}; // expanding on what the property values can be by using the union symbol "
x.id = 1234;
x.active = true;
x.log = () => console.log("awesome!"); // property value is a function this is kind of like those variables you assign functions. When a function is assigned to a variable, it's called a function expression. shorthand by using arrow functoin

////////////////////

type ContactStatus = "active" | "inactive" | "new";

interface Address {
  street: string;
  province: string;
  postalCode: string;
}

interface Contact {
  id: number;
  name: string;
  status: ContactStatus;
  address: Address;
}

interface Query {
  sort?: "asc" | "desc";
  matches(val): boolean;
}

function searchContacts(
  contacts: Contact[],
  query: Record<keyof Contact, Query>
) {
  return contacts.filter((contact) => {
    for (const property of Object.keys(contact) as (keyof Contact)[]) {
      // get the query object for this property
      const propertyQuery = query[property];
      // check to see if it matches
      if (propertyQuery && propertyQuery.matches(contact[property])) {
        return true;
      }
    }

    return false;
  });
}

const filteredContacts = searchContacts(
  [
    /* contacts */
  ],
  {
    id: { matches: (id) => id === 123 },
    name: { matches: (name) => name === "Carol Weaver" },
  }
);
