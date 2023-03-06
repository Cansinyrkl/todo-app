import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTodoList } from "../../hooks/useTodoList";
import "../.././App.css";
import Popup from "../popup/Popup";
import UserLogout from "../user-logout/UserLogout.jsx";
import { editTodoAction } from "../../utils/helpers/actions";

const Edit = () => {
  const [changeName, setChangeName] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  let { id } = useParams();
  const navigate = useNavigate();
  const { todoDispatch, todoList } = useTodoList();

  const todoListFilter = useMemo(() => {
    return todoList.find((todo) => todo.id === id);
  }, [id, todoList]);

  const backToTodos = () => setTimeout(() => navigate("/todo"), 3000);
  setTimeout(() => setShowPopup(false), 2000);

  const handleEdit = () => {
    todoDispatch(editTodoAction(todoListFilter.id, changeName));
    setShowPopup(true);
    backToTodos();
  };

  return (
    <div className="edit-container">
      {showPopup && <Popup />}
      <UserLogout disabled={showPopup} />
      <h1 className="edit-header">TO DO DEDIT</h1>
      <div className="edit-task">
        <input
          className="task-input"
          type="text"
          maxLength="32"
          placeholder="Enter a different to do."
          defaultValue={todoListFilter.name}
          onChange={(e) => setChangeName(e.target.value)}
          autoFocus
        />
        <button
          className="submit-task"
          onClick={handleEdit}
          disabled={!changeName}
        />
      </div>
    </div>
  );
};

export default Edit;
