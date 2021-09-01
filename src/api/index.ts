import { ITodos } from "components/types";

export const fetchTodos = async (): Promise<ITodos> => {
  const res = await fetch("/data/data.json");
  const data = await res.json();
  return data;
};

// export const addTodos = async (): Promise<ITodos> => {
//   // const res = await fetch("/data/data.json");
//   // const data = await res.json();
//   // return data;
// };
