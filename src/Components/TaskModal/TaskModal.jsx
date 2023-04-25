// Imports
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
  AlertTitle,
} from "./TaskModal.styled";

const newTask = [
  {
    title: "Task 1",
    description: "This is a new task",
    date: "2023-03-01",
    important: true,
    completed: "uncompleted",
  },
  {
    title: "Task 2",
    description: "This is a new task",
    date: "2023-03-03",
    important: false,
    completed: "uncompleted",
  },
  {
    title: "Task 3",
    description: "This is a new task",
    date: "2023-04-24",
    important: true,
    completed: "completed",
  },
];

// handle case if user delete it from browser
const storedTasks = JSON.parse(localStorage.getItem("tasks"));
if (storedTasks === null) {
  localStorage.setItem("tasks", JSON.stringify(newTask));
}

/**

* Component that displays task modal which have title ,description ,date and status of task
* @param {boolean} showAddNewTask - A value that contains on or off modal task
* @param {function} setShowAddNewTask - A function that sets value of on or off of task modal
* @param {string} taskMode - A string that indicates whether it is Add or Edit mode
* @param {string} titleTask - A string that contains the title of the task being edited
* @param {function} setTasks - A function that sets the state of the tasks
* @param {array} tasks - An array that contains the list of tasks
* @returns {React.Component}
*/

const TaskModal = ({
  showAddNewTask,
  setShowAddNewTask,
  taskMode,
  titleTask,
  setTasks,
  tasks,
}) => {
  // get all information of task
  const getTaskInfo = (title) => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    const task = storedTasks.find((task) => task.title === title);
    if (task !== undefined) {
      return {
        title: task.title,
        description: task.description,
        date: task.date,
        important: task.important,
        completed: task.completed,
      };
    }
    return null;
  };

  // Use states
  // const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState(
    taskMode === "Edit" ? getTaskInfo(titleTask)?.title : ""
  );
  const [date, setDate] = useState(
    taskMode === "Edit" ? getTaskInfo(titleTask)?.date : new Date()
  );
  const [description, setDescription] = useState(
    taskMode === "Edit" ? getTaskInfo(titleTask)?.description : ""
  );
  const [important, setImportant] = useState(
    taskMode === "Edit" ? getTaskInfo(titleTask)?.important : false
  );
  const [completed, setCompleted] = useState(
    taskMode === "Edit" ? getTaskInfo(titleTask)?.completed : "uncompleted"
  );
  const [titleIsUsed, setTitleIsUsed] = useState(false);
  // const [directory, setDirectory] = useState("Main");

  // functions that handle states
  const handleTitle = (event) => setTitle(event.target.value);
  const handleDate = (event) => {
    setDate(event);
  };
  const handleDescription = (event) => setDescription(event.target.value);
  // const handleDirectory = (event) => setDirectory(event.target.value);

  // handle submition of add task
  const handleSubmitTask = (event) => {
    event.preventDefault();
    const found = storedTasks.find((task) => task.title === title);

    if (found === undefined && title !== "") {
      //? insert a new task in state to refresh automatically
      setTitleIsUsed(false);
      setTasks([
        ...tasks,
        {
          title: title,
          description: description,
          date: date,
          important: important,
          completed: completed ? "completed" : "uncompleted",
        },
      ]);

      //? insert new task
      localStorage.setItem(
        "tasks",
        JSON.stringify([
          ...tasks,
          {
            title: title,
            description: description,
            date: date,
            important: important,
            completed: completed ? "completed" : "uncompleted",
          },
        ])
      );
      clearAllData();
      // close modal window
      setShowAddNewTask(false);
    } else setTitleIsUsed(true);
  };

  // Submit editing task
  const handleEditTask = (event) => {
    event.preventDefault();
    const editedTask = {
      title: title,
      description: description,
      date: date,
      important: important,
      completed: completed,
    };
    const newTasks = storedTasks.map((task) => {
      if (task.title === titleTask) {
        return editedTask;
      } else {
        return task;
      }
    });
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setShowAddNewTask(false);
  };

  // clear all data
  const clearAllData = () => {
    setTitle("");
    setDescription("");
    setImportant(false);
    setCompleted(false);
    setTitleIsUsed(false);
  };

  // Use Effects
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) setTasks(storedTasks);
  }, [setTasks]);

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
            {titleIsUsed && <AlertTitle>Task's Name Used Before</AlertTitle>}
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
              onChange={(e) => setImportant(e.target.checked)}
              checked={important}
            />
            <TaskStatus>Mark as important</TaskStatus>
          </ProgressCheck>
          <ProgressCheck>
            <input
              className="form-check-input w-5vm"
              type="checkbox"
              id="state-two"
              onChange={(e) => setCompleted(e.target.checked)}
              checked={completed}
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
          <AddTaskBtn onClick={handleEditTask}>Edit a task</AddTaskBtn>
        )}
      </Footer>
    </ModalContainer>
  );
};

export default TaskModal;
