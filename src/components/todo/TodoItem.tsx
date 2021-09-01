import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodoCheck, removeTodo } from "store/actions/todos";
import styled, { css } from "styled-components";
import { CheckOutlined } from "@ant-design/icons";
import EditTodoItem from "./EditTodoItem";

const { toggleTodoCheckSuccess } = toggleTodoCheck;
const { removeTodoSuccess } = removeTodo;

interface IProps {
  children?: React.ReactChild;
  id: string;
  content: string;
  isChecked: boolean;
  createdAt: string;
}

const TodoItem: React.FC<IProps> = ({ children, ...props }) => {
  const [showEdit, setShowEdit] = useState(false);
  const dispatch = useDispatch();
  const { id, isChecked, content } = props;

  const handleClickCircle = () => {
    dispatch(toggleTodoCheckSuccess(id));
  };

  const handleRemoveTodo = () => {
    dispatch(removeTodoSuccess(id));
  };

  const handleShowEdit = (show: boolean) => setShowEdit(show);

  return (
    <ItemBlock>
      {showEdit ? (
        <EditTodoItem handleShowEdit={handleShowEdit} {...props} />
      ) : (
        <>
          <FlexContainer>
            <FlexBox>
              <CheckCircle onClick={handleClickCircle} {...{ isChecked }}>
                {isChecked && <CheckOutlined />}
              </CheckCircle>
            </FlexBox>
            <MainText {...{ isChecked }}>{content}</MainText>
          </FlexContainer>
          <IconWrapper>
            <button onClick={() => setShowEdit(!showEdit)}>
              <i className="far fa-edit" />
            </button>
            <button onClick={handleRemoveTodo}>
              <i className="fas fa-trash-alt" />
            </button>
          </IconWrapper>
        </>
      )}
    </ItemBlock>
  );
};

export default TodoItem;

const ItemBlock = styled.li`
  display: flex;
  width: 95%;
  height: 70px;
  margin: 0 auto;
  padding: 20px 0;
  justify-content: space-between;
  align-items: center;

  & + & {
    border-top: 1px solid #eeeeee;
  }
`;

const CheckCircle = styled.div<{ isChecked: boolean }>`
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

  ${({ isChecked }) =>
    isChecked &&
    css`
      color: #3a58d2;
    `}
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const FlexBox = styled.div`
  display: block;
  padding: 4px 10px;
  align-items: center;
  text-align: center;
`;

const MainText = styled.span<{ isChecked: boolean }>`
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${({ isChecked }) =>
    isChecked &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
`;

const IconWrapper = styled.div`
  margin: 0 8px 0 50px;

  i {
    font-size: 15px;
    cursor: pointer;
  }
`;
