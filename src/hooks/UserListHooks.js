import { useContext, TodoListContext } from "./Index";

export const useMenuList = () => {
  const todoList = useContext(TodoListContext);
  const todo = todoList.todo;
  const todoDispatch = todoList.todoDispatch;

  return { todoList, todo, todoDispatch };
};
