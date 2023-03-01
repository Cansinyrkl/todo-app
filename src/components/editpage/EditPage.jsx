import Form from "react-bootstrap/Form";
import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useTodoList } from "../../hooks/useTodoList";
import { faPenSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EditPage = () => {
  const [show, setShow] = useState(false);
  const [changeName, setChangeName] = useState(null);
  let { id } = useParams();

  const { todoDispatch, todo } = useTodoList();

  const filterData = useMemo(() => {
    return todo.find((todo) => todo.id === id);
  }, [id, todo]);

  const handleEdit = () => {
    setShow(false);
    todoDispatch({
      type: "EDIT_TODO",
      selectedId: filterData.id,
      newName: changeName,
    });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <FontAwesomeIcon
        icon={faPenSquare}
        onClick={handleShow}
        style={{ cursor: "pointer", marginLeft: 10 }}
      />
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="Enter a different to do."
            defaultValue={filterData.name}
            autoFocus
            onChange={(e) => setChangeName(e.target.value)}
          />
        </Form.Group>
      </Form>
    </>
  );
};

export default EditPage;
