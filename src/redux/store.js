import { applyMiddleware, compose, createStore } from "redux";

import combinedReducers from "./reducers";
import createSagaMiddleware from "redux-saga";

const composeEnhancers =
  typeof window === "object" && window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]
    ? window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]({})
    : compose;

export const initStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
  const store = createStore(combinedReducers, enhancer);
  return { store, sagaMiddleware };
};
