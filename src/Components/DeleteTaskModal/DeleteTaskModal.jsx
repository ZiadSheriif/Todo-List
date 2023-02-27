// Imports
import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

// imports styles
import { ConfirmBtn } from "./DeleteTaskModal.styled";

/**
 * Component that displays a confirmation modal to delete a certain task
 * @param {boolean} deleteTask value that is on or off of confirmation modal
 * @returns {React.Component}
 */
const DeleteTaskModal = ({
  deleteTask,
  setDeleteTask,
  singleTask,
  titleTask,
}) => {
  // handle delete tasks modal
  const closeDeleteTaskModal = () => {
    setDeleteTask(false);
  };
  const handleTaskDelete = () => {
    if (singleTask) {
      const storedTasks = JSON.parse(localStorage.getItem("tasks"));
      const taskIndex = storedTasks.findIndex(
        (task) => task.title === titleTask
      );
      console.log(taskIndex);
      storedTasks.splice(taskIndex, 1);
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
    } else localStorage.clear();
    closeDeleteTaskModal();
  };
  return (
    <Modal
      show={deleteTask}
      onHide={closeDeleteTaskModal}
      backdrop="static"
      keyboard={true}
    >
      <Modal.Header closeButton>
        <Modal.Title>Are you sure?</Modal.Title>
      </Modal.Header>
      {singleTask && (
        <Modal.Body>This task will be deleted permanently.</Modal.Body>
      )}
      {!singleTask && (
        <Modal.Body>All data will be deleted permanently.</Modal.Body>
      )}
      <Modal.Footer>
        <Button variant="transparent" onClick={closeDeleteTaskModal}>
          Cancel
        </Button>
        <ConfirmBtn onClick={handleTaskDelete}>Confirm</ConfirmBtn>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteTaskModal;
