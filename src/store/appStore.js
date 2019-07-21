import { createStore, combineReducers } from "redux";

// Reducers

import HomeReducer from "../reducers/homeReducer";

// A very simple store
let store = createStore(
  combineReducers({
    home: HomeReducer
  })
);

export default store;
