import { getSession } from "../../utils/Session";
import { getUserFromSession } from "../../utils/helpers/GetUserFromSession";
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
  const userList = useContext(UserListContext);
  const loginUser = getSession();

  const submitHandle = (e) => {
    e.preventDefault();
    todoDispatch({
      type: "ADD_MENU",
      userId: loginUser,
      text: todoAdd,
    });
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
            placeholder="Enter the todo"
            className="todo-list"
            value={todoAdd}
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
