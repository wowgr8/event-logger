import React from "react";
import PropTypes from "prop-types";

function Log(props){
  return(
    <React.Fragment>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.notes}</em></p>
      <hr/>
    </React.Fragment>
  )
}

Log.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  notes: PropTypes.string
};

export default Log;
