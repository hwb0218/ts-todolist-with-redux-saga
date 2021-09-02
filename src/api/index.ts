import { BASE_URL, URL_PATH, method, headers } from "utils/constant";
import { ITodos, ITodo } from "types";

export interface IResponse {
  status: number;
  message: string;
}
// api reqeust
const fetchTemplate = async (method: string, reqData?: any, id: number = 0) => {
  const body = JSON.stringify(reqData);
  const res = await fetch(`${BASE_URL}/${URL_PATH}/${id}`, { method, headers, body });
  const data = await res.json();
  return data;
};
// todos fetch api
export const fetchTodos = async (): Promise<ITodos> => {
  return fetchTemplate(method.get);
};
// todos 추가 api
export const fetchAddTodo = async (): Promise<IResponse> => {
  return fetchTemplate(method.post, { content: "string" }, 1);
};
// todos 체크박스 토글 api
export const fetchToggleTodoCheck = async (): Promise<IResponse> => {
  return fetchTemplate(method.post, { isChecked: true }, 2);
};
// todos 삭제 api
export const fetchRemoveTodo = async (): Promise<IResponse> => {
  return fetchTemplate(method.post, {}, 3);
};
// todos content 수정 api
export const fetchEditTodo = async (): Promise<IResponse> => {
  return fetchTemplate(method.post, { content: "string" }, 4);
};
