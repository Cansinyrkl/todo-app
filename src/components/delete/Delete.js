import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTodoList } from "../../hooks/UserListHooks";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
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
      <Button variant="primary" onClick={handleShow}>
        <FontAwesomeIcon icon={faTrash} />
      </Button>

      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>{productHeader}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <b> {productHeader}</b>Are you sure you want to delete to do this?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Çık
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Kaydet
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;
