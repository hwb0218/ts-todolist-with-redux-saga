import { TODOS_FETCH_SUCCEED, TODOS_FETCH_FAILED } from "store/actions/types";
import { TodosAction } from "store/actions/todos";
import { INITAIL_STATE } from "utils/constant";

const todosReducer = (state = INITAIL_STATE, action: TodosAction) => {
  switch (action.type) {
    case TODOS_FETCH_SUCCEED:
      return action.payload;
    case TODOS_FETCH_FAILED:
      return {};
    default:
      return state;
  }
};

export default todosReducer;
