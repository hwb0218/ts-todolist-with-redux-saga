import { TODOS_FETCH_REQUEST, TODOS_FETCH_SUCCEED, TODOS_FETCH_FAILED } from "./types";
import { ITodos } from "api";

export const getTodos = () => {
  return { type: TODOS_FETCH_REQUEST };
};

export const getTodosSuccess = (todos: ITodos) => {
  return { type: TODOS_FETCH_SUCCEED, payload: todos };
};

export const getTodosFail = (error: any) => {
  return { type: TODOS_FETCH_FAILED, payload: error };
};

export type TodosAction =
  | ReturnType<typeof getTodos>
  | ReturnType<typeof getTodosSuccess>
  | ReturnType<typeof getTodosFail>;
