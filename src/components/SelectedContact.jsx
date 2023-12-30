import React from "react";
import { useState, useEffect } from "react";

export default function SelectedContact({ selectedContactId }) {
  const [contact, setContact] = useState(null);
  console.log(selectedContactId);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${selectedContactId}`)
    .then(res=>res.json())
    .then((json) => {
      console.log(json);
      setContact(json);
    })
    .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {contact && <h3>Contact Info for {contact.name}</h3>}
      <p>{contact?.email}</p>
      <p>{contact?.phone}</p>
    </div>
  );
}