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
  email: string;
}

interface Query<TProp> {
  // we add generic type TProp to show how we can utilize it on line 32
  sort?: "asc" | "desc";
  matches(val: TProp): boolean;
}

// type ContactQuery = Partial<Record<keyof Contact, Query>>;

// interface Query { // this worked with line 22 and line 29
//   sort?: "asc" | "desc";
//   matches(val): boolean;
// }
// type ContactQuery = {
//   [TProp in keyof Contact]?: Query; // This mapped type definition uses a property indexer syntax, the open and close brackets, in conjunction with the keyof syntax I used in the record based example, in order to enumerate all of the keys of the contact type. In other words, this example completely duplicates the previous type alias that used the record syntax, complete with the question mark at the end to make all of the mapped properties optional. TODO: I don't get it fully go practice with it
// };

type ContactQuery = {
  [TProp in keyof Contact]?: Query<Contact[TProp]>; // A mapped type where not only have all of the property names of the source type, contact in this case, been copied over but I've been able to reference the types of those properties as well.
};

function searchContacts(contacts: Contact[], query: ContactQuery) {
  return contacts.filter((contact) => {
    for (const property of Object.keys(contact) as (keyof Contact)[]) {
      // get the query object for this property
      const propertyQuery = query[property] as Query<Contact[keyof Contact]>;
      // check to see if it matches
      // You may have noticed that TypeScript is now complaining that it can't adequately predict the type of value that will be retrieved when we iterate through these properties on line 34. I can fix that issue by telling it that it will be some kind of type from one of the properties on contact but it doesn't need to care about which one.
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
    // Why is all of this useful? Well, now I've got full static typing in my query objects. For example, when I provide a query function for the ID property, the query functions generic type parameter is number, the same type as the contact IDs property. Likewise, the parameter type of the query object for the name property is a string, the same as the contacts name property that it was originally mapped from.
    id: { matches: (id) => id === 123 },
    name: { matches: (name) => name === "Carol Weaver" },
  }
);
