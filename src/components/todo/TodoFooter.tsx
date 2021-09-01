import React from "react";
import styled from "styled-components";
import { MENU_CATEGORIES } from "utils/constant";

interface IProps {}

const TodoFooter: React.FC<IProps> = () => {
  return (
    <TodoFooterWrap>
      <TabWrap>
        {MENU_CATEGORIES.map((category) => (
          <Tab key={category}>
            <Text>{category}</Text>
          </Tab>
        ))}
      </TabWrap>
    </TodoFooterWrap>
  );
};

export default TodoFooter;

const TodoFooterWrap = styled.div`
  border-top: 1px solid #d7d7d7;
`;

const TabWrap = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  font-size: 20px;
`;

const Tab = styled.li`
  flex: 1;
  text-align: center;
`;

const Text = styled.span`
  cursor: pointer;
`;
