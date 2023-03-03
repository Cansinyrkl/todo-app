import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogOut from "../user-logout/UserLogout.jsx";
import { useUserList } from "../../hooks/useUserList";
import { useTodoList } from "../../hooks/useTodoList";
import { getUserLoginInfo } from "../../utils/helpers";
import { getUserFromSession } from "../../utils/helpers";
import DeleteModal from "../delete-modal/DeleteModal.jsx";
import "../../App.css";

const Todo = () => {
  const [todoAdd, setTodoAdd] = useState("");
  const { todoList, todoDispatch } = useTodoList();
  const { userList } = useUserList();
  const sessionId = sessionStorage.getItem("userInfo");
  const loginUser = getUserLoginInfo();
  const loggedInUser = getUserFromSession(userList, loginUser);

  const onSubmit = (e) => {
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
        <form onSubmit={onSubmit} className="task-form">
          <input
            type="text"
            onChange={onChange}
            maxLength="32"
            placeholder="Add New Task"
            className="task-input"
            value={todoAdd}
          />
          <button className="submit-task" disabled={!todoAdd} />
        </form>
      </div>
      {todoList.map(({ id, name, userId }) => {
        if (Number(sessionId) === userId || loggedInUser.admin) {
          return (
            <>
              <ul className="task-list">
                <li className="task-list-item">
                  {name}
                  <div className="edit-icon-container">
                    <Link to={`/todo/${id}`}>
                      <div className="edit-icon"></div>
                    </Link>
                    <DeleteModal deleteId={id} todoName={name} />
                  </div>
                </li>
              </ul>
            </>
          );
        }
        return null;
      })}
    </div>
  );
};

export default Todo;
