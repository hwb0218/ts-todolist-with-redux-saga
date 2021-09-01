import React, { useEffect, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { hideModal } from "store/actions/modal";
import styled, { css } from "styled-components";

interface IProps {}

const TodoForm: React.FC<IProps> = () => {
  const dispatch = useDispatch();
  const elRef = useRef<HTMLDivElement>(null);
  const { isOpen } = useSelector((state: RootState) => state.modal);

  const handleClick = useCallback(
    ({ target }) => {
      if (isOpen && elRef.current && !elRef.current.contains(target)) dispatch(hideModal());
    },
    [isOpen, dispatch]
  );

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [handleClick]);

  return (
    <FormWrapper ref={elRef} {...{ isOpen }}>
      <FormHedaer>
        <FormTitle>Add your ToDo task</FormTitle>
        <Icon onClick={() => dispatch(hideModal())}>
          <i className="fas fa-times"></i>
        </Icon>
      </FormHedaer>
      <form>
        <Input placeholder="What's need to be done?" />
        <Btn>Save</Btn>
      </form>
    </FormWrapper>
  );
};

export default TodoForm;

const FormWrapper = styled.div<{ isOpen: boolean }>`
  height: 0;
  width: 100%;
  padding: 20px;
  background: rgb(255, 255, 255);
  transition: all 0.3s cubic-bezier(0.86, 0, 0.07, 1);
  border-radius: 15px;

  ${({ isOpen }) =>
    isOpen &&
    css`
      height: 25%;
    `}
`;

const FormHedaer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FormTitle = styled.span`
  font-size: 25px;
  font-weight: 600;
`;

const Icon = styled.div`
  & i {
    font-size: 30px;
    cursor: pointer;
  }
`;

const Input = styled.input`
  padding: 10px;
  margin: 20px 0 30px 0;
  border: 1px solid #dddddd;
  border-radius: 3px;
  width: 100%;
  line-height: 20px;
  outline: none;
  font-size: 16px;

  &::placeholder {
    color: #dddddd;
    font-size: 16px;
  }
`;

const Btn = styled.button`
  width: 100%;
  padding: 20px 0;
  border: none;
  border-radius: 10px;
  background: #3a58d2;
  color: #fdfdfd;
  font-size: 20px;
  font-weight: 600;
`;
