import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import countdown from "./countdown/reducers";
import form from "./form/reducers";

const rootReducer = combineReducers({
  countdown,
  form,
});

const store = createStore(rootReducer, devToolsEnhancer({}));

export default store;
