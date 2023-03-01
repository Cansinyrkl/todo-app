import React, { useState, useContext } from "react";
import { TodoListContext } from "../../store/context/useTodoList";
import { UserListContext } from "../../store/context/useUserContext";
import { Container, FormContainer } from "../styledComponents/StyledComponents";

const Todo = () => {
  const [todoAdd, setTodoAdd] = useState("");
  const todoList = useContext(TodoListContext);
  const todos = todoList.todo;
  const todoDispatch = todoList.todoDispatch;

  const usersList = useContext(UserListContext);

  return (
    <Container>
      <FormContainer>
        <div>
          {todos.map((todo) => (
            <div key={todo.id}>{todo.name}</div>
          ))}
        </div>
      </FormContainer>
    </Container>
  );
};

export default Todo;
