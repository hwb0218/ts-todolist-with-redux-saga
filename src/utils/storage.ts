import { INITAIL_STATE } from "./constant";
import { ITodo } from "components/types";

export const getLocalStorageItem = (key: string) => {
  const localStorageData = JSON.parse(localStorage.getItem(key)!) || INITAIL_STATE;
  return localStorageData;
};

export const setLocalStorageItem = (key: string, data: ITodo) => {
  return localStorage.setItem(key, JSON.stringify(data));
};
