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
  TdInside,
} from "../styledComponents/StyledComponents";
import DeleteModal from "../delete/Delete.js";
import Arrangement from "../arrangement/Arrangement";

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
