
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
    

    default: 
      return state
  }
}