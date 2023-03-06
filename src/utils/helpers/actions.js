import { addTodoType, deleteTodoType, editTodoType } from "../constants";

export const addTodoAction = (userId, text) => ({
  type: addTodoType,
  userId,
  text,
});

export const deleteTodoAction = (value) => ({
  type: deleteTodoType,
  value,
});

export const editTodoAction = (selectedId, newName) => ({
  type: editTodoType,
  selectedId,
  newName,
});
