import { getSession } from "../../utils/Session";
import { getUserFromSession } from "../../utils/helpers/GetUserFromSession";
import React, { useState, useContext } from "react";
import { TodoListContext } from "../../store/context/useTodoList";
import { UserListContext } from "../../store/context/useUserContext";
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
import Arrangement from "../arrangement/Arrangement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";

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
          <Button className="btn btn-outline-dark">
            <FontAwesomeIcon icon="faPlus" />
          </Button>
        </form>
      </AddTodo>
      <FormContainer>
        {todo.map(({ id, name, userId }) => {
          if (Number(sessionId) === userId || loggedInUser.admin === true) {
            return (
              <TodoTd key={id}>
                {name}
                <TdInside className="props">
                  <DeleteModal
                    deleteId={id}
                    productHeader={name}
                    className="deleteModalClass"
                  />
                  <Arrangement
                    productHeader={name}
                    selectedId={id}
                    className="arrangementClass"
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
