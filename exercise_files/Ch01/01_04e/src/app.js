/**
 *
 * @param {number} contactId
 * @returns
 */
async function getContact(contactId) {
  const resp = await $.ajax({
    // after we do npm i or npm i --save @types/jquert it'll download the package from the npm repository and extract it into node_modules folder and in the @types folder it'll have jquery and the most important files with the .d.ts extension, contain the type definitions that TypeScript uses to provide type checking and auto-complete features.
    url: `/contacts/${contactId}`,
    dataType: "json",
  });

  return {
    id: +resp.id,
    name: resp.name,
    birthDate: new Date(resp.birthDate),
  };
}

getContact(1).then((contact) => {
  contact.id = 1234;
  contact.birthDate = new Date("12/12/1990");
});

getContact(2).then((contact) => {
  console.log("Contact: ", JSON.stringify(contact));
});
