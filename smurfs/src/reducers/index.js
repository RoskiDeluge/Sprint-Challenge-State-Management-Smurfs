import { FETCH_DATA, UPDATE_SMURFS, SET_ERROR, ADD_SMURF } from "../actions"

export const initialState = {
  smurfs: [{
    id: 0,
    name: "Brainey",
    age: 200,
    height: "5cm",
  }],
  isFetchingData: false,
  error: ""
}

export const smurfReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_DATA: 
      return {
        ...state,
        isFetchingData: true,
        smurfs: []
      }
      case UPDATE_SMURFS:
        return {
          ...state,
          smurfs: action.payload,
          isFetchingData: false
        }
      case ADD_SMURF:
        return {
          ...state,
          smurfs: [...state.smurfs, action.payload]
        }
      case SET_ERROR:
        return {
          ...state,
          isFetchingData: false,
          error: action.payload
        }

    default: 
      return state
  }
}