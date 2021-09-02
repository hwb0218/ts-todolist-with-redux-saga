import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { setLocalStorageItem } from "utils/storage";

const useTodo = () => {
  const todos = useSelector((state: RootState) => state.todos);
  // 전역 상태 todos가 업데이트 될 때마다 로컬스토리지에 todos 저장
  useEffect(() => {
    setLocalStorageItem("todos", todos);
  }, [todos]);
};

export default useTodo;
