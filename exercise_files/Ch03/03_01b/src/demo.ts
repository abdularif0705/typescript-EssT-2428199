type ContactName = string;

type ContactStatus = "active" | "inactive" | "new"; // turned enum into type alias instead for examples like this where you want to just restrict certain fields to a limited set of known values, I find type aliases to be far more effective. Type aliases are generally more performant because they are resolved at compile time
// In summary, use type aliases when you need a simple and flexible way to define a set of possible values, and use enums when you need a more structured and feature-rich way to define named constants.

// defining enums like this actually adds more code to your final output. Often that may be what you want.
// enum ContactStatus {
//   Active = "active",
//   Inactive = "inactive",
//   New = "new",
// }

type ContactBirthDate = Date | number | string; // define diff types it can take

interface Contact {
  id: number;
  name: ContactName;
  birthDate?: ContactBirthDate; // define diff types it can take we could also do
  status?: ContactStatus; // the values will be restricted to the 3 values we added in the type alias above
}

interface Address {
  line1: string;
  line2: string;
  province: string;
  region: string;
  postalCode: string;
}

// interface AddressableContact extends Contact, Address {}
type AddressableContact = Contact & Address; // Combines the 2 types together to create a new type

function getBirthDate(contact: Contact) {
  if (typeof contact.birthDate === "number") {
    return new Date(contact.birthDate);
  } else if (typeof contact.birthDate === "string") {
    return Date.parse(contact.birthDate);
  } else {
    return contact.birthDate;
  }
}

let primaryContact: Contact = {
  id: 12345,
  name: "Jamie Johnson",
  status: "active", // restricted to the values its type contains
};
