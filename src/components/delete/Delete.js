import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTodoList } from "../../hooks/useTodoList";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DeleteModal({ deleteId, productHeader }) {
  const [show, setShow] = useState(false);
  const { todoDispatch } = useTodoList();
  const handleDelete = () => {
    setShow(false);
    todoDispatch({ type: "DELETE_TODO", value: deleteId });
  };
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <FontAwesomeIcon
        icon={faXmark}
        onClick={handleShow}
        style={{ cursor: "pointer" }}
        className="DeleteIcon"
      />

      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>{productHeader}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <b> {productHeader}</b>Are you sure you want to delete to do this?
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-outline-dark" onClick={handleClose}>
            Exit
          </Button>
          <Button className="btn btn-outline-dark" onClick={handleDelete}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;
