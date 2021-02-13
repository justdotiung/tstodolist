let todoData: DBTodoData[] = [];

export type TodoData = {
  initDate: string;
  text: string;
  endDate: string;
};

export type DBTodoData = {
  id: number;
  initDate: string;
  text: string;
  endDate: string;
  checked: boolean;
};

export const post = (data: TodoData): number => {
  const lastIdx = todoData.length > 0 ? todoData.length - 1 : 0;
  const id = todoData[lastIdx] ? todoData[lastIdx].id + 1 : 0;
  todoData.push({ ...data, id, checked: false });
  return id;
};

export const all = (): Array<TodoData> => {
  return todoData;
};

export const edit = (edit: DBTodoData): void => {
  todoData = todoData.map((data) => (data.id === edit.id ? edit : data));
};

export const listByinitDate = (initDate: string): Array<DBTodoData> => {
  return todoData.filter((obj) => obj.initDate === initDate);
};

export const getDataById = (id: number): DBTodoData => {
  return todoData.filter((obj) => obj.id === id)[0];
};

export const deleteId = (id: number): void => {
  todoData = todoData.filter((data) => data.id !== id);
};
