import { getSession } from "../../utils/helpers";
import { getUserFromSession } from "../../utils/helpers";
import React, { useState, useContext } from "react";
import { TodoListContext } from "../../store/context/useTodoList";
import { UserListContext } from "../../store/context/useUserContext";
import { Link } from "react-router-dom";
import {
  Container,
  FormContainer,
  GeneralButton,
  TodoTd,
  AddTodo,
  TdInside,
  InInput,
  InTodoButton,
} from "../styledComponents/StyledComponents";
import DeleteModal from "../delete/Delete.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Todo = () => {
  const [todoAdd, setTodoAdd] = useState("");
  const todoList = useContext(TodoListContext);
  const todo = todoList.todo;
  const todoDispatch = todoList.todoDispatch;
  const userList = useContext(UserListContext);
  const sessionId = sessionStorage.getItem("userInfo");
  const loginUser = getSession();
  const loggedInUser = getUserFromSession(userList.users, loginUser);

  const submitHandle = (e) => {
    e.preventDefault();
    todoDispatch({
      type: "ADD_TODO",
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
      <AddTodo>
        <form onSubmit={submitHandle}>
          <InInput
            type="text"
            onChange={onChange}
            maxLength="16"
            placeholder="Enter the todo"
            className="todo-list"
            value={todoAdd}
          />
          <FontAwesomeIcon icon="fa-solid fa-plus" />
        </form>
      </AddTodo>
      <FormContainer>
        {todo.map(({ id, name, userId }) => {
          if (Number(sessionId) === userId || loggedInUser.admin === true) {
            return (
              <TodoTd key={id}>
                {name}
                <TdInside className="props">
                  <Link to={`/todo/${id}`}>asdad</Link>
                  <DeleteModal
                    deleteId={id}
                    productHeader={name}
                    className="deleteModalClass"
                  />
                </TdInside>
              </TodoTd>
            );
          }
          return null;
        })}
      </FormContainer>
    </Container>
  );
};

export default Todo;
