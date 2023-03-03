import { TodoListContext } from "../store/context/TodoListContext";
import { useContext } from "react";

export const useTodoList = () => {
  const todoListContext = useContext(TodoListContext);
  const todoList = todoListContext.todo;
  const todoDispatch = todoListContext.todoDispatch;

  return { todoList, todoDispatch };
};
