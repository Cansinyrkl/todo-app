import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTodoList } from "../../hooks/useTodoList";
import "../.././App.css";

const EditPage = () => {
  const [changeName, setChangeName] = useState(null);
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
    navigate("/todo");
  };

  return (
    <div className="edit-container">
      <input
        className="task-input"
        type="text"
        placeholder="Enter a different to do."
        defaultValue={filterData.name}
        onChange={(e) => setChangeName(e.target.value)}
        autoFocus
      />
      <button className="submit-task" onClick={handleEdit} />
    </div>
  );
};

export default EditPage;
