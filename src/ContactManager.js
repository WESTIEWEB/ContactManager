import AddPersonForm from "./AddPerson";
import PeopleList from "./PeopleList";
import {useState} from 'react';
import React from "react";

function ContactManager(props) {
    const [contacts, setContacts] = useState(props.data);
  
    function addPerson(name) {
      setContacts([...contacts, name]);
    }
  
    return (
      <>
          <div id="body">
            <h1>Contact Manager</h1>
            <AddPersonForm handleSubmit={addPerson} />
          </div>
          <div>
            <PeopleList data={contacts} />
          </div>
      </>
    );
  }
  export default ContactManager;