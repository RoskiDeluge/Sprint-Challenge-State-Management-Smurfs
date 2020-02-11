import React, { useEffect } from 'react';
import { connect } from "react-redux";

import { getData } from '../actions';

const SmurfList = ({getData, smurfs, error}) => {

  useEffect(() => {
    getData();
  }, [getData]);

  return (
      <div>
        {error ? (
          <div>{error}</div>
        ) : (
          smurfs.map(smurf => <div key={smurf.id}>{smurf.name}</div>)
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