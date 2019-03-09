import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import countdown from "./countdown/reducers";

const rootReducer = combineReducers({
  countdown,
});

const store = createStore(rootReducer, devToolsEnhancer({}));

export default store;
