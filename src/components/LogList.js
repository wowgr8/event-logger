import React from "react";
import Log from "./Log";
// import proptypes

function LogList(){

  return(
    <React.Fragment>
      <hr/>
      <h1> Note: this is where we loop through logs using .map. arrow notation in map arguemtn will show
        <Log 
        // {/* <Log log props  /> */} 
        />
      </h1>
    </React.Fragment>
  );
}

export default LogList;