import React, { useMemo, useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTodoList } from "../../hooks/useTodoList";
import "../.././App.css";
import Popup from "../../popup/Popup";
import LogOut from "../logout/LogOut.jsx";

const EditPage = () => {
  const [changeName, setChangeName] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  let { id } = useParams();
  const navigate = useNavigate();
  const { todoDispatch, todo } = useTodoList();

  const filterData = useMemo(() => {
    return todo.find((todo) => todo.id === id);
  }, [id, todo]);

  const handleEdit = () => {
    todoDispatch({
      type: "EDIT_TODO",
      selectedId: filterData.id,
      newName: changeName,
    });
    setShowPopup(true);
    setTimeout(() => navigate("/todo"), 3000);
    setTimeout(() => setShowPopup(false), 2000);
  };

  return (
    <div className="edit-container">
      {showPopup && <Popup />}
      <LogOut />
      <h1 className="edit-header">TO DO DEDIT</h1>
      <div className="edit-task">
        <input
          className="task-input"
          type="text"
          placeholder="Enter a different to do."
          defaultValue={filterData.name}
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

export default EditPage;
