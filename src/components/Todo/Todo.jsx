import React, { useState, useContext } from "react";
import { TodoListContext } from "../../store/context/useTodoList";

const Todo = () => {
  const [todoAdd, setTodoAdd] = useState("");
  const todoList = useContext(TodoListContext);
  const list = todoList.todo;
  const todoDispatch = todoList.todoDispatch;
console.log(list)
  return <div>Todo</div>;
};

export default Todo;
