import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTodoList } from "../../hooks/useTodoList";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteTodoAction } from "../../utils/helpers/actions";

function DeleteModal({ deleteId, todoName }) {
  const [show, setShow] = useState(false);
  const { todoDispatch } = useTodoList();

  const handleDelete = () => {
    setShow(false);
    todoDispatch(deleteTodoAction(deleteId));
  };
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <FontAwesomeIcon
        icon={faXmark}
        onClick={handleShow}
        className="deleteIcon"
      />

      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>ALERT</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <b>{todoName} </b>Are you sure you want to delete to do this?
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-outline-dark" onClick={handleClose}>
            No
          </Button>
          <Button className="btn btn-outline-dark" onClick={handleDelete}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;
