import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "store";
import { editTodo } from "store/actions/todos";
import styled from "styled-components";

const { editTodoSuccess } = editTodo;

interface IProps {
  id: string;
  content: string;
  isChecked: boolean;
  createdAt: string;
  handleShowEdit: (show: boolean) => void;
}

const EditTodoItem: React.FC<IProps> = ({ handleShowEdit, ...props }) => {
  const { id, content } = props;
  const [value, setValue] = useState(content);
  const dispatch = useDispatch<AppDispatch>();

  const handleChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };

  const handleClickEditBtn = () => {
    dispatch(editTodoSuccess(id, value));
    handleShowEdit(false);
  };

  return (
    <>
      <EditInput type="text" value={value} onChange={handleChangeTodo} />
      <EditToDoBtn onClick={handleClickEditBtn}>
        <i className="far fa-edit" />
      </EditToDoBtn>
      <CancleEditBtn onClick={() => handleShowEdit(false)}>✖</CancleEditBtn>
    </>
  );
};

export default EditTodoItem;

const EditInput = styled.input`
  flex: 1;
  width: 95%;
  background: inherit;
  color: #777777;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-bottom: 1px solid #dddddd;
  color: #3a58d2;
  padding: 0 5px;
  margin-left: 43px;
  margin-right: 5px;
  &:focus {
    outline: none;
  }
`;

const EditToDoBtn = styled.button`
  border: none;
  background: inherit;
  color: #777777;
  cursor: pointer;

  i {
    font-size: 15px;
  }
`;

const CancleEditBtn = styled.button`
  border: none;
  background: inherit;
  color: #777777;
  cursor: pointer;
  margin: 0 12px 0 6.5px;
  padding: 0;
  font-size: 18px;
`;
