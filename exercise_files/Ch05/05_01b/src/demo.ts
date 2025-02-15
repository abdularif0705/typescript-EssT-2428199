interface Contact {
  id: number;
}

const currentUser = {
  id: 1234,
  roles: ["ContactEditor"],
  isInRole(role: string): boolean {
    return this.roles.contains(role);
  },
};

@log // instead of doing trace and debug it does it for us throughout the class functions
class ContactRepository {
  private contacts: Contact[] = [];

  @authorize("ContactViewer")
  getContactById(id: number): Contact | null {
    // console.trace(`ContactRepository.getContactById: BEGIN`);

    // if (!currentUser.isInRole("ContactViewer")) {
    //   throw Error("User not authorized to execute this action");
    // }

    const contact = this.contacts.find((x) => x.id === id);

    // console.debug(`ContactRepository.getContactById: END`);

    return contact;
  }
  @authorize("ContactEditor")
  save(contact: Contact): void {
    // console.trace(`ContactRepository.save: BEGIN`);

    // if (!currentUser.isInRole("ContactEditor")) {
    //   throw Error("User not authorized to execute this action");
    // }

    const existing = this.getContactById(contact.id);

    if (existing) {
      Object.assign(existing, contact);
    } else {
      this.contacts.push(contact);
    }

    // console.debug(`ContactRepository.save: END`);
  }
}
