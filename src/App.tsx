import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import TodoContainer from "components/todo/TodoContainer";

interface IProps {}

const App: React.FC<IProps> = () => (
  <>
    <GlobalStyles />
    <TodoContainer />
  </>
);

export default App;
