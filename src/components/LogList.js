import React from "react";
import Log from "./Log";
import PropTypes from "prop-types";

function LogList(props){

  return(
    <React.Fragment>
      <hr/>
      {props.logList.map((log, index) => 
        <Log
          names = {log.names}
          location = {log.location}
          log = {log.notes}
          key={index}
        />
      )}
    </React.Fragment>
  );
}

LogList.propTypes = {
  logList: PropTypes.array
};

export default LogList;