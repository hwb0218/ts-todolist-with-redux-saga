import { TODOS_FETCH_SUCCEED, TODOS_FETCH_FAILED } from "store/actions/types";
import { TodosAction } from "store/actions/todos";
import { INITAIL_STATE } from "utils/constant";
import { ITodos } from "components/types";

const todosReducer = (state = INITAIL_STATE, action: TodosAction): ITodos => {
  switch (action.type) {
    case TODOS_FETCH_SUCCEED:
      console.log(action);
      return { ...state, ...action.payload };
    case TODOS_FETCH_FAILED:
      return { ...state };
    default:
      return state;
  }
};

export default todosReducer;
