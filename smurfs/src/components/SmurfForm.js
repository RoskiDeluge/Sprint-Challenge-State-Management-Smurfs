import React, { useState } from 'react';
import { connect } from "react-redux";
import { postData } from '../actions';

const SmurfForm = props => {

  const  [ smurf, setSmurf ]  = useState({
    name: "", 
    age: "",
    height: ""
  });

  const handleChanges = e => {
    setSmurf({ 
      ...smurf,
      [e.target.name] : e.target.value 
    });
    // console.log("rd: SmurfForm: handleChanges: smurf object, ", smurf);
  }

  const handleAddSmurf = e => {
    e.preventDefault();
    props.postData(smurf);
    // console.log("rd: SmurfForm: handleAddSmurf, smurf object, ", smurf);
  }

  return (
      <div>
        <form onSubmit={handleAddSmurf}>
          <input
            type="text"
            name="name"
            value={smurf.name}
            onChange={handleChanges}
            placeholder="Your Smurf's name"
          />
          <input
            type="text"
            name="age"
            value={smurf.age}
            onChange={handleChanges}
            placeholder="Age"
          />
          <input 
            type="text"
            name="height"
            value={smurf.height}
            onChange={handleChanges}
            placeholder="Height"
          />
          <button>Add Smurf</button>
        </form>
      </div>
  )
}

const mapStateToProps = state => {
  return {
    
  }
}

export default connect(
  mapStateToProps,
  { postData }
)(SmurfForm);