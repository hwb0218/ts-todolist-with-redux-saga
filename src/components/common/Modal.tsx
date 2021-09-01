import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";
import styled, { css } from "styled-components";
import TodoForm from "components/todo/TodoForm";

interface IProps {}

const Modal: React.FC<IProps> = () => {
  const { isOpen } = useSelector((state: RootState) => state.modal);

  return (
    <ModalOverlay {...{ isOpen }}>
      <TodoForm />
    </ModalOverlay>
  );
};

export default Modal;

const ModalOverlay = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background: #e2e2e2ad;
  transition: all 0.3s cubic-bezier(0.86, 0, 0.07, 1);
  opacity: 0;

  ${({ isOpen }) =>
    isOpen &&
    css`
      opacity: 1;
      top: auto;
    `}
`;
