export interface ITodos {
  count: number;
  todoList: ITodoList[];
}

export interface ITodoList {
  id: string;
  content: string;
  isCheck: boolean;
  createdAt: Date;
}

export const getTodos = async (): Promise<ITodos> => {
  const res = await fetch("/data/data.json");
  const data = await res.json();
  return data;
};

// export const addTodos = async (): Promise<ITodos> => {
//   // const res = await fetch("/data/data.json");
//   // const data = await res.json();
//   // return data;
// };
