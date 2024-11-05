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
  contact.id = "1234"; // TS can tell this is wrong type because id is a number on line 8
  contact.birthDate = "12/12/1990"; // look at \01_03e\src\app.js to see how we matched
});

getContact("2").then((contact) => {
  console.log("Contact: ", JSON.stringify(contact));
});
