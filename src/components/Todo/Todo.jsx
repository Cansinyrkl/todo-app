import React, { useState, useContext } from "react";
import { TodoListContext } from "../../store/context/useTodoList";
import { UserListContext } from "../../store/context/useUserContext";

const Todo = () => {
  const [todoAdd, setTodoAdd] = useState("");
  const todoList = useContext(TodoListContext);
  const list = todoList.todo;
  const todoDispatch = todoList.todoDispatch;

  const usersList = useContext(UserListContext);

  console.log(usersList);
  return <div>Todo</div>;
};

export default Todo;
