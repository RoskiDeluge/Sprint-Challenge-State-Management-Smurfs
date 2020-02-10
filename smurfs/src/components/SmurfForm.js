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
    setSmurf({ [e.target.name] : e.target.value });
  }

  const handleAddSmurf = e => {
    e.preventDefault();
    props.postData(smurf);
  }

  return (
      <div>
        <form>
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
          <button onClick={handleAddSmurf}>Add Smurf</button>
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