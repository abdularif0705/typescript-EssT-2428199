type ContactName = string;
type ContactStatus = "active" | "inactive" | "new";
type ContactBirthDate = Date | number | string;

interface Contact {
  id: number;
  name: ContactName;
  birthDate?: ContactBirthDate;
  status?: ContactStatus;
  email: string;
}

let primaryContact: Contact = {
  id: 12345,
  name: "Jamie Johnson",
  status: "active",
};

type ContactFields = keyof Contact;

function getValue<T, U extends keyof T>(source: T, propertyName: U) {
  return source[propertyName]; // without strong guardrails this dynamic typing can cause hard to debug bugs for example
}

const value = getValue({ min: 1, max: 200 }, ""); // iif you press Ctrl + Space inside the "" it'll show max and min as options because TS has inferred the values
