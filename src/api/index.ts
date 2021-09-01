import { BASE_URL } from "utils/constant";
import { ITodos } from "components/types";

export const fetchTodos = async (): Promise<ITodos> => {
  const res = await fetch(`${BASE_URL}`);
  const data = await res.json();
  return data;
};

// export const addTodos = async (): Promise<ITodos> => {
//   // const res = await fetch("/data/data.json");
//   // const data = await res.json();
//   // return data;
// };
