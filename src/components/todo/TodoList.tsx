import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "store/actions/modal";
import { getTodos } from "store/actions/todos";
import styled from "styled-components";
import { ReactComponent as Duck } from "assets/svg/duckdcukgo.svg";
import { RootState } from "store";

interface IProps {}

const TodoList: React.FC<IProps> = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);
  console.log(todos);
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <TodoListWrapper>
      <Duck />
      <FirstTodo>Add your first ToDO</FirstTodo>
      <AddTodoBtn onClick={() => dispatch(showModal())}>Add Now</AddTodoBtn>
    </TodoListWrapper>
  );
};

export default TodoList;

const TodoListWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FirstTodo = styled.span`
  display: inline-block;
  font-size: 30px;
  margin: 10px 0;
  font-weight: 600;
`;

const AddTodoBtn = styled.button`
  background: #3a58d2;
  padding: 10px 50px;
  border: none;
  border-radius: 10px;
  color: #fdfdfd;
  font-weight: 600;
  word-spacing: 1px;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  &:hover {
    background: #a5c9ff;
  }
`;
