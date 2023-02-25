// Imports
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

// imports styles
import { ConfirmBtn } from "./DeleteTaskModal.styled";

/**
 * Component that displays a confirmation modal to delete a certain task
 * @param {boolean} deleteTask value that is on or off of confirmation modal
 * @returns {React.Component}
 */
const DeleteTaskModal = ({ deleteTask, setDeleteTask }) => {
  // handle delete tasks modal
  const closeDeleteTaskModal = () => {
    setDeleteTask(false);
  };

  return (
    <Modal
      show={deleteTask}
      onHide={closeDeleteTaskModal}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Are you sure?</Modal.Title>
      </Modal.Header>
      <Modal.Body>This task will be deleted permanently.</Modal.Body>
      <Modal.Footer>
        <Button variant="transparent" onClick={closeDeleteTaskModal}>
          Cancel
        </Button>
        <ConfirmBtn>Confirm</ConfirmBtn>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteTaskModal;
