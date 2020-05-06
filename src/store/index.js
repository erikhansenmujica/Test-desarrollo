import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/cars";
import thunkMiddleware from "redux-thunk";

const loggerMiddleware = createLogger();

export const store = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware, thunkMiddleware)
);
