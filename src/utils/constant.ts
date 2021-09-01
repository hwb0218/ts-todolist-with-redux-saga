import { ITodos } from "types";

export const BASE_URL = "https://184b25be-e3f9-4fd5-881b-7a0e427dbc69.mock.pstmn.io";
export const URL_PATH = "todo";

export const INITAIL_STATE: ITodos = {
  count: 0,
  todoList: [],
};

export const method = {
  get: "GET",
  post: "POST",
};

export const headers = {
  "Content-Type": "application/json",
};
