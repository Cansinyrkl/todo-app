import Form from "react-bootstrap/Form";
import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTodoList } from "../../hooks/useTodoList";

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
    <>
      <Form>
        <Form.Control
          type="text"
          placeholder="Enter a different to do."
          defaultValue={filterData.name}
          onChange={(e) => setChangeName(e.target.value)}
          autoFocus
        />

        <button onClick={handleEdit}>Edit</button>
      </Form>
    </>
  );
};

export default EditPage;
