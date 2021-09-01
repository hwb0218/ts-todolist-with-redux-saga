import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "store/actions/modal";
import { getTodos } from "store/actions/todos";
import { RootState, AppDispatch } from "store";
import styled from "styled-components";
import { ReactComponent as Duck } from "assets/svg/duckdcukgo.svg";
import TodoItem from "components/todo/TodoItem";

interface IProps {}

const TodoList: React.FC<IProps> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { todoList } = useSelector((state: RootState) => state.todos);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <>
      {todoList ? (
        <ListWrapper>
          <ul>
            {todoList.map((todo) => (
              <TodoItem key={todo.id} {...todo}>
                {todo.content}
              </TodoItem>
            ))}
          </ul>
        </ListWrapper>
      ) : (
        <EmptyListWrapper>
          <Duck />
          <FirstTodo>Add your first ToDO</FirstTodo>
          <AddTodoBtn onClick={() => dispatch(showModal())}>Add Now</AddTodoBtn>
        </EmptyListWrapper>
      )}
    </>
  );
};

export default TodoList;

const ListWrapper = styled.div`
  flex: 1;
  padding: 0px;
  padding-bottom: 48px;
  overflow-y: auto;
  overflow-x: hidden;
`;

const EmptyListWrapper = styled.div`
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
