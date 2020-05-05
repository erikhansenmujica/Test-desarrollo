import {createLogger} from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/cars";

const loggerMiddleware = createLogger();

export const store = createStore(
  rootReducer,
  applyMiddleware(
    loggerMiddleware // buen middleware que registra las acciones
  )
);
