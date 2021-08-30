import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import TodoContainer from "components/TodoContainer";

interface IProps {}

const App: React.FC<IProps> = ({}) => (
  <div>
    <GlobalStyles />
    <TodoContainer />
  </div>
);

export default App;
