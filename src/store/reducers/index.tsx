import { combineReducers } from "redux";
import todos from "./todos";
import modal from "./modal";

const rootReducer = combineReducers({ todos, modal });

export default rootReducer;
