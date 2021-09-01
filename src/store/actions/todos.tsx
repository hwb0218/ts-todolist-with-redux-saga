import { TODOS_FETCH_REQUEST, TODOS_FETCH_SUCCEED, TODOS_FETCH_FAILED, ADD_TODOS } from "./types";
import { ITodos, ITodo } from "components/types";

export const getTodos = () => {
  return {
    type: TODOS_FETCH_REQUEST,
  };
};

export const getTodosSuccess = (todos: ITodos) => {
  return {
    type: TODOS_FETCH_SUCCEED,
    payload: todos,
  };
};

export const getTodosFail = (error: unknown) => {
  return {
    type: TODOS_FETCH_FAILED,
    payload: error,
  };
};

export const addTodo = (todo: ITodo) => {
  return {
    type: ADD_TODOS,
    payload: todo,
  };
};

export const toggleCircle = (id: string) => {};

export type TodosAction =
  | ReturnType<typeof getTodos>
  | ReturnType<typeof getTodosSuccess>
  | ReturnType<typeof getTodosFail>
  | ReturnType<typeof addTodo>;
