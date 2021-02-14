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

export const post = (data: TodoData): Promise<number> => {
  return new Promise((_resolve) => {
    const lastIdx = todoData.length > 0 ? todoData.length - 1 : 0;
    const id = todoData[lastIdx] ? todoData[lastIdx].id + 1 : 0;
    todoData.push({ ...data, id, checked: false });
    _resolve(id);
  });
};

export const all = (): Promise<Array<TodoData>> => {
  return new Promise((resolve) => {
    resolve(todoData);
  });
};

export const edit = (edit: DBTodoData): void => {
  todoData = todoData.map((data) => (data.id === edit.id ? edit : data));
};

export const listByinitDate = (initDate: string): Promise<Array<DBTodoData>> => {
  return new Promise((resolve) => {
    resolve(todoData.filter((obj) => obj.initDate === initDate));
  });
};

export const getDataById = (id: number): Promise<DBTodoData> => {
  return new Promise((resolve) => {
    resolve(todoData.filter((obj) => obj.id === id)[0]);
  });
};

export const deleteId = (id: number): void => {
  todoData = todoData.filter((data) => data.id !== id);
};
