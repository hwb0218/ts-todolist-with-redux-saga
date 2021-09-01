export interface ITodos {
  count: number;
  todoList: ITodo[];
}

export interface ITodo {
  id: string;
  content: string;
  isChecked: boolean;
  createdAt: string;
}
