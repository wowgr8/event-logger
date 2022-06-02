import React from "react";
import { v4 } from 'uuid';
// import proptypes
// import ReusableForm from "./ReusableForm";

function NewLog(){

  // function for eventhandler will go here (it's being passed down from control)
  function handleNewLogSubmission(event){
    event.preventDefault();
    console.log(event.target.names.value);
    console.log(event.target.location.value);
    console.log(event.target.log.value);
  }

  return(
    <React.Fragment>
      <form onSubmit={handleNewLogSubmission}>
        <input
          type='text'
          name='names'
          placeholder='Bird Name' />
        <input
          type='text'
          name='location'
          placeholder='Location' />
        <textarea
          name='log'
          placeholder='Log  bird details.' />
        <button type='submit'>Log!</button>
      </form>
    </React.Fragment>
  );
}

export default NewLog;