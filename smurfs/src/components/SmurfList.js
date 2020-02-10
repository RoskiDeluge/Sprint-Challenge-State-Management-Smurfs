import React, { useEffect } from 'react';
import { connect } from "react-redux";

import { getData } from '../actions';

const SmurfList = props => {

  useEffect(() => {
    props.getData();
  }, []);

  return (
      <div>
        {props.error ? (
          <div>{props.error}</div>
        ) : (
          props.smurfs.map(smurf => <div>{smurf.name}</div>)
        )}
      </div>
  )
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error
  }
}

export default connect(
  mapStateToProps,
  { getData }
)(SmurfList);