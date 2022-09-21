import React, { useState } from 'react';


//the AddpersonForm build's a form component

function AddPersonForm(props) {
    const [ person, setPerson ] = useState('');
      
    function handleChange(e) {
      setPerson(e.target.value);
    }
      
    function handleSubmit(e) {

      //it disables the creation of empty list
      if(person !== ''){ 
        props.handleSubmit(person);
        setPerson('');
      }
      e.preventDefault();
    }
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" 
          placeholder="Add new contact" 
          onChange={handleChange} 
          value={person} />
        <button type="submit">Add</button>
      </form>
    );
  }

export default AddPersonForm;