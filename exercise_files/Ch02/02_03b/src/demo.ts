interface Contact {
  id: number;
  name: ContactName;
  birthDate?: Date;
}

let primaryContact: Contact = {
  birthDate: new Date("01-01-1980"),
  id: 12345,
  name: "Jamie Johnson",
};

type ContactName = string; // this is a type alias and it's just a string but the name is explicit so when we look on line 3 we know it's not just a string but a ContactName string... Honestly using string is more straightforward this seems retarded no cap
