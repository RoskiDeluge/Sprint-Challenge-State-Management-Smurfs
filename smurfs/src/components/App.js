import React from "react";
import "./App.css";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { smurfReducer as reducer } from "../reducers";

import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';

const store = createStore(reducer, applyMiddleware(thunk));

const App = () => {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Smurf Village</h1>
          <SmurfForm />
          <SmurfList />
        </div>
      </Provider>
    );
}

export default App;
