import React, { useState, useContext } from "react";
import { TodoListContext } from "../../store/context/useTodoList";
import { UserListContext } from "../../store/context/useUserContext";
import {
  Container,
  FormContainer,
  GeneralButton,
} from "../styledComponents/StyledComponents";

const Todo = () => {
  const [todoAdd, setTodoAdd] = useState("");
  const todoList = useContext(TodoListContext);
  const todo = todoList.todo;
  const todoDispatch = todoList.todoDispatch;

  const usersList = useContext(UserListContext);

  const submitHandle = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    const value = e.target.value;
    const upperCase = value.charAt(0).toUpperCase() + value.substr(1);
    setTodoAdd(upperCase);
  };

  return (
    <Container>
      <FormContainer>
        <div>
          {todo.map((todo) => (
            <div key={todo.id}>{todo.name}</div>
          ))}
        </div>
        <form onSubmit={submitHandle}>
          <input
            type="text"
            onChange={onChange}
            maxLength="16"
            placeholder="enter your todo"
            className="todo-list"
          />
          <GeneralButton className="todoAddBtn" type="submit">
            Add
          </GeneralButton>
        </form>
      </FormContainer>
    </Container>
  );
};

export default Todo;
