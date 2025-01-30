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

type Awesome = Contact["address"]["postalCode"]; // reference address type in Contact interface and dig into address of type Address and reference IT'S property postalCode (hover cursor over the Awesome keyword and it'll say string)

interface ContactEvent {
  contactId: Contact["id"];
}

interface ContactDeletedEvent extends ContactEvent {}

interface ContactStatusChangedEvent extends ContactEvent {
  oldStatus: Contact["status"];
  newStatus: Contact["status"];
}

interface ContactEvents {
  deleted: ContactDeletedEvent;
  statusChanged: ContactStatusChangedEvent; // detect this in last line
  // ... and so on
}

function getValue<T, U extends keyof T>(source: T, propertyName: U) {
  return source[propertyName];
}

function handleEvent<T extends keyof ContactEvents>(
  eventName: T, // accept a string containing any of th eproperties in ContactEvents
  handler: (evt: ContactEvents[T]) => void // function that accepts a single parameter and that parameter
) {
  if (eventName === "statusChanged") {
    handler({ contactId: 1, oldStatus: "active", newStatus: "inactive" }); // it takes ContactStatusChangedEvent object
  }
}

handleEvent("statusChanged", (evt) => evt); // by doing index acess on line 41 it went statusChanged tyoe
