import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { partReducers } from "./reducers";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const logger = createLogger({});

export default function configureStore() {
    const store = createStore(partReducers, undefined, compose(applyMiddleware(thunk, logger), composeWithDevTools()));
    return store;
}
