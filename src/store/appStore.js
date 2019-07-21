import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

import rootSaga from "../actions/sagas";

const sagaMiddleware = createSagaMiddleware();

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
let store = createStore(
  persistedReducer,
  applyMiddleware(logger, sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

let persistor = persistStore(store);

const action = type => store.dispatch({ type });

export { store, persistor };
