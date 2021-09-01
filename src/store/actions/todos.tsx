import {
  TODOS_FETCH_REQUEST,
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
} from "./types";
import { ITodos, ITodo } from "types";

export const getTodos = {
  getTodosRequest() {
    return { type: TODOS_FETCH_REQUEST };
  },
  getTodosSuccess(todos: ITodos) {
    return { type: TODOS_FETCH_SUCCEED, payload: todos };
  },
  getTodosFail(error: unknown) {
    return {
      type: TODOS_FETCH_FAILED,
      payload: error,
    };
  },
};

export const addTodo = {
  addTodoSuccess(todo: ITodo) {
    return { type: ADD_TODO_SUCCEED, payload: todo };
  },
  addTodoFail(error: unknown) {
    return { type: ADD_TODO_FAILED, payload: error };
  },
};

export const toggleTodoCheck = {
  toggleTodoCheckSuccess(id: string) {
    return { type: TOGGLE_TODO_CHECK_SUCCEED, payload: id };
  },
  toggleTodoCheckFail(error: unknown) {
    return { type: TOGGLE_TODO_CHECK_FAILED, payload: error };
  },
};

export const removeTodo = {
  removeTodoSuccess(id: string) {
    return { type: REMOVE_TODO_SUCCEED, payload: id };
  },
  removeTodoFail(error: unknown) {
    return { type: REMOVE_TODO_FAILED, payload: error };
  },
};

export const editTodo = {
  editTodoSuccess(id: string, text: string) {
    return { type: EDIT_TODO_SUCCEED, payload: { id, text } };
  },
  editTodoFail(error: unknown) {
    return { type: EDIT_TODO_FAILED, payload: error };
  },
};

export type TodosAction =
  | ReturnType<typeof getTodos.getTodosRequest>
  | ReturnType<typeof getTodos.getTodosSuccess>
  | ReturnType<typeof getTodos.getTodosFail>
  | ReturnType<typeof addTodo.addTodoSuccess>
  | ReturnType<typeof addTodo.addTodoFail>
  | ReturnType<typeof toggleTodoCheck.toggleTodoCheckSuccess>
  | ReturnType<typeof toggleTodoCheck.toggleTodoCheckFail>
  | ReturnType<typeof removeTodo.removeTodoSuccess>
  | ReturnType<typeof removeTodo.removeTodoFail>
  | ReturnType<typeof editTodo.editTodoSuccess>
  | ReturnType<typeof editTodo.editTodoFail>;
