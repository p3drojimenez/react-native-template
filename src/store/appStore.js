import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
// Reducers

import HomeReducer from "../reducers/homeReducer";

// A very simple store
let store = createStore(
  combineReducers({
    home: HomeReducer
  }),
  applyMiddleware(logger)
);

export default store;
