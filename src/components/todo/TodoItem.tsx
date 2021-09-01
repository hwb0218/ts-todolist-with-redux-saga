import React from "react";
import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { CheckOutlined } from "@ant-design/icons";

interface IProps {
  children?: React.ReactChild;
  id: string;
  content: string;
  isCheck: boolean;
  createdAt: Date;
}

const TodoItem: React.FC<IProps> = ({ children, ...props }) => {
  const { id, isCheck } = props;

  const handleClickCircle = () => {};

  return (
    <ItemBlock>
      <CheckCircle onClick={handleClickCircle} {...{ isCheck }}>
        {isCheck && <CheckOutlined />}
      </CheckCircle>
    </ItemBlock>
  );
};

export default TodoItem;

const ItemBlock = styled.li`
  display: flex;
  width: 95%;
  margin: 0 auto;
  padding: 20px 0;
  justify-content: space-between;
  align-items: center;

  & + & {
    border-top: 1px solid #eeeeee;
  }
`;

const CheckCircle = styled.div<{ isCheck: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 16px;
  border: 1px solid #dddddd;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  cursor: pointer;

  ${({ isCheck }) =>
    isCheck &&
    css`
      color: #3a58d2;
    `}
`;
