import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { setLocalStorageItem } from "utils/storage";

const useTodo = () => {
  const todos = useSelector((state: RootState) => state.todos);

  useEffect(() => {
    setLocalStorageItem("todos", todos);
  }, [todos]);
};

export default useTodo;
