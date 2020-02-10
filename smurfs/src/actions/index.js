import axios from 'axios';

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_SMURFS = "UPDATE_SMURFS";
export const ADD_SMURF = "ADD_SMURF";
export const SET_ERROR = "SET_ERROR";

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log(res);
      dispatch({ type: UPDATE_SMURFS, payload: res.data });
    })
    .catch(err => {
      console.log("error fetching data from api. err: ", err);
      dispatch({ type: SET_ERROR, payload: "error fetching data from api" });
    })
}

export const postData = () => dispatch => {
  dispatch({ type: ADD_SMURF });
  axios
    .post("http://localhost:3333/smurfs")
}