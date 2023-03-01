import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useTodoList } from "../../hooks/useTodoList";
import { faPenSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Arrangement({ productHeader, selectedId }) {
  const [show, setShow] = useState(false);
  const [changeName, setChangeName] = useState(null);

  const { todoDispatch } = useTodoList();
  const handleEdit = () => {
    setShow(false);
    todoDispatch({
      type: "EDIT_TODO",
      selectedId: selectedId,
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{productHeader}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Enter a different to do."
                autoFocus
                onChange={(e) => setChangeName(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-outline-dark" onClick={handleClose}>
            Close
          </Button>
          <Button className="btn btn-outline-dark" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Arrangement;
