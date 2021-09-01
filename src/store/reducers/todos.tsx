import {
  TODOS_FETCH_SUCCEED,
  TODOS_FETCH_FAILED,
  ADD_TODO_SUCCEED,
  ADD_TODO_FAILED,
  TOGGLE_TODO_CHECK_SUCCEED,
  TOGGLE_TODO_CHECK_FAILED,
  REMOVE_TODO_SUCCEED,
  REMOVE_TODO_FAILED,
  EDIT_TODO_SUCCEED,
  EDIT_TODO_FAILED,
} from "store/actions/types";
import { TodosAction } from "store/actions/todos";
import { INITAIL_STATE } from "utils/constant";

const todosReducer = (state = INITAIL_STATE, action: TodosAction) => {
  switch (action.type) {
    case TODOS_FETCH_SUCCEED:
      return { ...state, ...action.payload };
    case TODOS_FETCH_FAILED:
      return { ...state, error: action.payload };
    case ADD_TODO_SUCCEED:
      return {
        ...state,
        count: state.todoList.length + 1,
        todoList: state.todoList.concat(action.payload),
      };
    case ADD_TODO_FAILED:
      return { ...state, error: action.payload };
    case TOGGLE_TODO_CHECK_SUCCEED:
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload ? { ...todo, isChecked: !todo.isChecked } : todo
        ),
      };
    case TOGGLE_TODO_CHECK_FAILED:
      return { ...state, error: action.payload };
    case REMOVE_TODO_SUCCEED:
      return {
        ...state,
        count: state.todoList.length - 1,
        todoList: state.todoList.filter((todo) => todo.id !== action.payload),
      };
    case REMOVE_TODO_FAILED:
      return { ...state, error: action.payload };
    case EDIT_TODO_SUCCEED:
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload.id ? { ...todo, content: action.payload.text } : todo
        ),
      };
    case EDIT_TODO_FAILED:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default todosReducer;
