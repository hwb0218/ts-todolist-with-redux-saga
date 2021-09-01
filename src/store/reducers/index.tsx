import { combineReducers } from "redux";
import todos from "./todos";
import modal from "./modal";
// 리덕스에서 제공하는 메서드로, 각 리듀서를 하나로 모아주는 역할을 한다.
const rootReducer = combineReducers({ todos, modal });

export default rootReducer;
