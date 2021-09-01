import React from "react";
import styled from "styled-components";
import Header from "./TodoHeader";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";
import Modal from "components/common/Modal";
import useTodo from "hooks/useTodo";

interface IProps {}

const TodoContainer: React.FC<IProps> = () => {
  useTodo();
  return (
    <TodoWrapper>
      <Header />
      <TodoList />
      <TodoFooter />
      <Modal />
    </TodoWrapper>
  );
};

export default TodoContainer;

const TodoWrapper = styled.div`
  width: 70%;
  height: 95vh;
  min-width: 360px;
  max-width: 700px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 30px;
  box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
