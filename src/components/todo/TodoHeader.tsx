import React from "react";
import { useDispatch } from "react-redux";
import { showModal } from "store/actions/modal";

import styled from "styled-components";

interface IProps {}

const TodoHeader: React.FC<IProps> = () => {
  const dispatch = useDispatch();

  return (
    <Header>
      <Title>ToDO List</Title>
      <CircleBtn onClick={() => dispatch(showModal())}>
        <i className="fas fa-plus-circle"></i>
      </CircleBtn>
    </Header>
  );
};

export default TodoHeader;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 5px;
  margin: 0 auto;
  width: 95%;
  border-bottom: 1px solid #d7d7d7;
  font-size: 30px;
`;

const Title = styled.span`
  display: inline-block;
`;

const CircleBtn = styled.button`
  background: #ffffff;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .fa-plus-circle {
    color: #3a58d2;
    transition: all 0.15s ease-in-out;
    &:hover {
      color: #a5c9ff;
    }
  }
`;
