interface Contact {
  id: number;
  name: ContactName;
  birthDate?: Date;
  status: ContatcStatus;
}

// Enums are a special type that has a hard-coded list of values and is defined like this. Once an enum is defined, I can refer to it just as I would any other type. In our contact case I can replace my string type with the ContactStatus enum.  Unlike many other TypeScripts syntaxes that get stripped away at compile time, enums do get compiled along with the rest of your code. This allows you to refer to these types at runtime like this
enum ContatcStatus {
  Active = "Active",
  Inactive = "Inactive",
  New = "New",
}

let primaryContact: Contact = {
  birthDate: new Date("01-01-1980"),
  id: 12345,
  name: "Jamie Johnson",
  status: ContatcStatus.Inactive, // Hover over so it tells you the enum
};

type ContactName = string;
