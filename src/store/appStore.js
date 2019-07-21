
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

// Reducers

import HomeReducer from "../reducers/homeReducer";

const rootReducer = combineReducers({
  home: HomeReducer
});

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
let store = createStore(persistedReducer, applyMiddleware(logger));
let persistor = persistStore(store);

export { store, persistor };
