import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodosSuccess } from "store/actions/todos";
import { RootState } from "store";
import { getLocalStorageItem, setLocalStorageItem } from "utils/storage";

const useTodo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);

  useEffect(() => {
    setLocalStorageItem("todos", todos);
  }, [todos]);
};

export default useTodo;
