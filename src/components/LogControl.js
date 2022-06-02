import React from "react";
import LogList from "./LogList";
import NewLog from "./NewLog";
// import LogDetails
// IMport EditLog

class LogControl extends React.Component{

  // constructor w/ props and state goes here
  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  //Methods for buttons go here



  render(){
    //conditionals go here
    // other component tag elements will pass state slice and methods from above, here.


    return(
      <React.Fragment>
        <h2>This is the currently visible view/log variable placeholder</h2>
        <h3> post button placeholder</h3>
      </React.Fragment>
    );
  }
}

export default LogControl;