export interface ITodos {
  count: number;
  todoList: ITodo[];
}

export interface ITodo {
  id: string;
  content: string;
  isCheck: boolean;
  createdAt: Date;
}
