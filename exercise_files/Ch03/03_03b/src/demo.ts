const x = "string";
const y = true;
console.log(typeof x); // --> "string"
console.log(typeof y); // --> "boolean"

type ContactName = string;
type ContactStatus = "active" | "inactive" | "new";
type ContactBirthDate = Date | number | string;

interface Contact {
  id: number;
  name: ContactName;
  birthDate?: ContactBirthDate;
  status?: ContactStatus;
}

function toContact(nameOrContact: string | Contact): Contact {
  if (typeof nameOrContact === "object") {
    // because we said nameOrContact can be either a string or a Contact type, if it's a Contact type then it is an object hence TypeScript infers (hover over the nameOrContact.id or any one of them below and see it says ((parameter) nameOrContact: Contact) because it inferred that)
    return {
      id: nameOrContact.id,
      name: nameOrContact.name,
      status: nameOrContact.status,
    };
  } else {
    return {
      id: 0,
      name: nameOrContact, // hover over this and it'll show you it inferred it's a string
      status: "active",
    };
  }
}

// define or determine static types dynamically
const myType = { min: 1, max: 200 };

function save(source: typeof myType) {} // this is a shortcut but most cases better to just create an interface or type alias
