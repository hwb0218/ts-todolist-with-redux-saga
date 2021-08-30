import { TODOS_FETCH_SUCCEED, TODOS_FETCH_FAILED } from "store/actions/types";
import { TodosAction } from "store/actions/todos";

const INITAIL_STATE = 0;

const todosReducer = (state = INITAIL_STATE, action: TodosAction) => {
  switch (action.type) {
    case TODOS_FETCH_SUCCEED:
      return {};
    case TODOS_FETCH_FAILED:
      return {};
    default:
      return state;
  }
};

export default todosReducer;
