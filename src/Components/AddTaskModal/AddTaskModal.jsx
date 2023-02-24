import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";

import {
  ModalContainer,
  Label,
  Footer,
  AddTaskBtn,
  ProgressCheck,
  TaskStatus,
  DateStyled,
  DropdownContainer,
} from "./AddTaskModal.styled";

const AddTaskModal = ({ showAddNewTask, setShowAddNewTask }) => {
  // use states
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState("");
  const [directory, setDirectory] = useState("Main");
  const [important, setImportant] = useState("");
  const [unimportant, setUnimportant] = useState("");

  const handleTitle = (event) => setTitle(event.target.value);
  const handleDate = (event) => setDate(event.target.value);
  const handleDescription = (event) => setDescription(event.target.value);
  const handleDirectory = (event) => setDirectory(event.target.value);
  const handleImportant = (event) => setImportant(event.target.value);

  return (
    <ModalContainer
      show={showAddNewTask}
      onHide={() => setShowAddNewTask(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title>Add a task</Modal.Title>
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
            <DateStyled onChange={setDate} value={date} />
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
        <AddTaskBtn>Add a task</AddTaskBtn>
      </Footer>
    </ModalContainer>
  );
};

export default AddTaskModal;
