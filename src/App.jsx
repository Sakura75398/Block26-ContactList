import { useState } from "react";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  return (
    <>
      {selectedContactId ? (
        <>
          <SelectedContact selectedContactId={selectedContactId} />
        </>
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}

export default App;
