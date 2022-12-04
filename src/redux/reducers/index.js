import { combineReducers } from "redux";
import generatorConfigReducer from "./generatorConfig";
import passwordsReducer from "./passwords";

const combinedReducers = combineReducers({
  generatorConfig: generatorConfigReducer,
  passwords: passwordsReducer,
});

export default combinedReducers;
