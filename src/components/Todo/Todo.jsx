import { getSession } from "../../utils/helpers";
import { getUserFromSession } from "../../utils/helpers";
import React, { useState, useContext } from "react";
import { TodoListContext } from "../../store/context/useTodoList";
import { UserListContext } from "../../store/context/useUserContext";
import { Link } from "react-router-dom";
import "../../App.css";
import DeleteModal from "../delete/Delete.js";
import LogOut from "../logout/LogOut.jsx";

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
    setTodoAdd("");
  };
  const onChange = (e) => {
    const value = e.target.value;
    const upperCase = value.charAt(0).toUpperCase() + value.substr(1);
    setTodoAdd(upperCase);
  };

  return (
    <div className="app-container">
      <LogOut />
      <h1 className="app-header">TO DO LIST</h1>
      <div className="add-task">
        <form onSubmit={submitHandle} className="task-form">
          <input
            type="text"
            onChange={onChange}
            maxLength="10"
            placeholder="Add New Task"
            className="task-input"
            value={todoAdd}
          />
          <button className="submit-task" />
        </form>
      </div>
      {todo.map(({ id, name, userId }) => {
        if (Number(sessionId) === userId || loggedInUser.admin === true) {
          return (
            <ul className="task-list">
              <li className="task-list-item">
                <label className="task-list-item-label" key={id}>
                  {name}
                </label>
                <div className="emty"></div>
                <Link to={`/todo/${id}`}>
                  <div class="edit icon"></div>
                </Link>
                <DeleteModal deleteId={id} productHeader={name} />
              </li>
            </ul>
          );
        }
        return null;
      })}
    </div>
  );
};

export default Todo;
