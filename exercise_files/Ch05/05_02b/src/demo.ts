interface Contact {
  id: number;
}

const currentUser = {
  id: 1234,
  roles: ["ContactEditor"],
  isAuthenticated(): boolean {
    return true;
  },
  isInRole(role: string): boolean {
    return this.roles.contains(role);
  },
};

function authorize(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const wrapped = descriptor.value; // make a copy of the original method before we override it

  descriptor.value = function () {
    // change the method to this new one
    if (!currentUser.isAuthenticated()) {
      throw Error("User not authenticated");
    }

    try {
      return wrapped.apply(this, arguments); // call the original method within this new method
    } catch (error) {
      console.error(`Error in ${propertyKey}: ${error.message}`);
      throw error;
    }
  };
}

class ContactRepository {
  private contacts: Contact[] = [];

  @authorize
  getContactById(id: number): Contact | null {
    if (!currentUser.isInRole("ContactViewer")) {
      throw Error("User not authorized to execute this action");
    }

    const contact = this.contacts.find((x) => x.id === id);
    return contact;
  }

  @authorize
  save(contact: Contact): void {
    const existing = this.getContactById(contact.id);

    if (existing) {
      Object.assign(existing, contact);
    } else {
      this.contacts.push(contact);
    }
  }
}
