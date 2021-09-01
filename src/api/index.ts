import { BASE_URL, URL_PATH, method, headers } from "utils/constant";
import { ITodos, ITodo } from "types";

export interface IResponse {
  status: number;
  message: string;
}

const fetchTemplate = async (method: string, reqData?: any, id: number = 0) => {
  const body = JSON.stringify(reqData);
  const res = await fetch(`${BASE_URL}/${URL_PATH}/${id}`, { method, headers, body });
  const data = await res.json();
  return data;
};

export const fetchTodos = async (): Promise<ITodos> => {
  return fetchTemplate(method.get);
};

export const fetchAddTodo = async (): Promise<IResponse> => {
  return fetchTemplate(method.post, { content: "string" }, 1);
};

export const fetchToggleTodoCheck = async (): Promise<IResponse> => {
  return fetchTemplate(method.post, { isChecked: true }, 2);
};

export const fetchRemoveTodo = async (): Promise<IResponse> => {
  return fetchTemplate(method.post, {}, 3);
};

export const fetchEditTodo = async (): Promise<IResponse> => {
  return fetchTemplate(method.post, { content: "string" }, 4);
};
