let todoData = [];
export const post = (data) => {
    const lastIdx = todoData.length > 0 ? todoData.length - 1 : 0;
    const id = todoData[lastIdx] ? todoData[lastIdx].id + 1 : 0;
    todoData.push(Object.assign(Object.assign({}, data), { id, checked: false }));
    return id;
};
export const all = () => {
    return todoData;
};
export const edit = (edit) => {
    todoData = todoData.map((data) => (data.id === edit.id ? edit : data));
};
export const listByinitDate = (initDate) => {
    return todoData.filter((obj) => obj.initDate === initDate);
};
export const getDataById = (id) => {
    return todoData.filter((obj) => obj.id === id)[0];
};
export const deleteId = (id) => {
    todoData = todoData.filter((data) => data.id !== id);
};
