// Imports
import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";
import useLocalStorage from "Hooks/useLocalStorage";

import {
  ModalContainer,
  Label,
  Footer,
  AddTaskBtn,
  ProgressCheck,
  TaskStatus,
  DateStyled,
  DropdownContainer,
} from "./TaskModal.styled";

/**
 * Component that displays task modal which have title ,description ,date and status of task
 *
 * @param {boolean} showAddNewTask value that contains on or off modal task
 * @param {function setShowAddNewTask()} setShowAddNewTask function that sets value of on or off of task modal
 * @returns {React.Component}
 */

const TaskModal = ({
  showAddNewTask,
  setShowAddNewTask,
  taskMode,
  titleTask,
}) => {
  // use states
  const getTaskInfo = (title) => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    const task = storedTasks.find((task) => task.title === title);
    if (task !== undefined) {
      return {
        title: task.title,
        description: task.description,
        date: task.date,
        important: task.important,
      };
    }
    return null;
  };

  // Use states
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState(
    taskMode === "Edit" ? getTaskInfo(titleTask)?.title : ""
  );
  const [date, setDate] = useState(
    taskMode === "Edit" ? getTaskInfo(titleTask)?.date : new Date()
  );
  const [description, setDescription] = useState(
    taskMode === "Edit" ? getTaskInfo(titleTask)?.description : ""
  );
  const [directory, setDirectory] = useState("Main");
  const [important, setImportant] = useState(
    taskMode === "Edit" ? getTaskInfo(titleTask)?.important : false
  );

  // functions that handle states
  const handleTitle = (event) => setTitle(event.target.value);
  const handleDate = (event) => setDate(event.target.value);
  const handleDescription = (event) => setDescription(event.target.value);
  const handleDirectory = (event) => setDirectory(event.target.value);

  // handle submition of add task
  const handleSubmitTask = (event) => {
    event.preventDefault();

    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    const found = storedTasks.find((task) => task.title === title);

    if (found === undefined) {
      setTasks([
        ...tasks,
        {
          title: title,
          description: description,
          date: date,
          important: important,
        },
      ]);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  };

  // Use Effects
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) setTasks(storedTasks);
  }, []);

  return (
    <ModalContainer
      show={showAddNewTask}
      onHide={() => setShowAddNewTask(false)}
    >
      <Modal.Header closeButton>
        {taskMode === "Add" && <Modal.Title>Add a task</Modal.Title>}
        {taskMode === "Edit" && <Modal.Title>Edit a task</Modal.Title>}
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              placeholder="e.g: study for the test"
              autoFocus
              value={title}
              onChange={handleTitle}
              maxLength="100"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Label>Date</Label>
            <DateStyled onChange={handleDate} value={date} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Label>Description (optional)</Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="e.g: study for the test"
              onChange={handleDescription}
              maxLength="500"
              value={description}
            />
          </Form.Group>
        </Form>
        <DropdownContainer>
          <Form.Label>Select a directory</Form.Label>
          <Dropdown.Toggle id="dropdown-basic">Main</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Main</Dropdown.Item>
          </Dropdown.Menu>
        </DropdownContainer>
        <div>
          <ProgressCheck>
            <input
              className="form-check-input w-5vm"
              type="checkbox"
              id="state-one"
            />
            <TaskStatus>Mark as important</TaskStatus>
          </ProgressCheck>
          <ProgressCheck>
            <input
              className="form-check-input w-5vm"
              type="checkbox"
              id="state-two"
            />
            <TaskStatus>Mark as completed</TaskStatus>
          </ProgressCheck>
        </div>
      </Modal.Body>
      <Footer>
        {taskMode === "Add" && (
          <AddTaskBtn onClick={handleSubmitTask}>Add a task</AddTaskBtn>
        )}
        {taskMode === "Edit" && (
          <AddTaskBtn onClick={handleSubmitTask}>Edit a task</AddTaskBtn>
        )}
      </Footer>
    </ModalContainer>
  );
};

export default TaskModal;
