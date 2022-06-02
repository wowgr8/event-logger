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
    let currentlyVisibleState = null;
    if(this.state.formVisibleOnPage){
      currentlyVisibleState = <NewLog />
    } else {
      currentlyVisibleState = <LogList />
    }


    return(
      <React.Fragment>
        {currentlyVisibleState}
        <h3> post button placeholder</h3>
      </React.Fragment>
    );
  }
}

export default LogControl;