// Imports
import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

// imports styles
import { ConfirmBtn } from "./DeleteTaskModal.styled";

/**
 * Component that displays a confirmation modal to delete a certain task or all tasks
 * @param {boolean} deleteTask - Value that is on or off of confirmation modal
 * @param {function} setDeleteTask - Function to set value of deleteTask
 * @param {boolean} singleTask - Value that represents if only a single task is to be deleted or not
 * @param {string} titleTask - Title of the task to be deleted
 * @param {function} setTasks - Function to update the task list after task deletion
 * @returns {React.Component} - Returns the delete task confirmation modal
 */
const DeleteTaskModal = ({
  deleteTask,
  setDeleteTask,
  singleTask,
  titleTask,
  setTasks,
}) => {
  /**
   * Function to close the delete task confirmation modal
   */
  const closeDeleteTaskModal = () => {
    setDeleteTask(false);
  };

  /**
   * Function to delete the selected task(s) from the task list
   */
  const handleTaskDelete = () => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));

    // delete a certain task
    if (singleTask) {
      const taskIndex = storedTasks.findIndex(
        (task) => task.title === titleTask
      );

      storedTasks.splice(taskIndex, 1);
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }
    // delete all tasks
    else {
      localStorage.setItem("tasks", JSON.stringify([]));
    }

    setTasks(storedTasks);
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
        {singleTask && (
          <Modal.Title>Are you sure to delete {titleTask}?</Modal.Title>
        )}
        {!singleTask && (
          <Modal.Title>Are you sure to delete all tasks ?</Modal.Title>
        )}
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
