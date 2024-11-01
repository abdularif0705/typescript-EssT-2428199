/**
 * @param makes it see problems because it's not type number if we go change 2 to "2" on line 24 you'll see ts complaining which is what we like to see
 * @param {number} contactId
 * @returns
 */
async function getContact(contactId) {
  const resp = await $.ajax({
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

getContact("2").then((contact) => {
  console.log("Contact: ", JSON.stringify(contact));
});
