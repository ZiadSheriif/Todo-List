// Imports
import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from "react-bootstrap/Dropdown";
import TaskModal from "Components/TaskModal/TaskModal";

// import styles
import { OffcanvasContainer, Header, TaskBtn } from "./LeftSideBar.styled";

/**
 * Component that displays the left sidebar of the to-do list app, including options for different task views and the ability to add new tasks.
 *
 * @param {Object} props - An object containing the following properties:
 *   setTasks {Function} - A function to set the tasks in the app.
 *   tasks {Array} - An array of task objects to display in the app.
 * @returns {React.Component} - The React component for the left sidebar.
 */
const LeftSideBar = ({ setTasks, tasks }) => {
  const [showAddNewTask, setShowAddNewTask] = useState(false);
  return (
    <>
      <OffcanvasContainer
        show={true}
        backdrop={false}
        enforceFocus={false}
        scroll={true}
      >
        <Header>
          <Offcanvas.Title>to-do list</Offcanvas.Title>
          <TaskBtn
            onClick={() => {
              setShowAddNewTask(true);
            }}
          >
            Add New Task
          </TaskBtn>{" "}
        </Header>
        <Offcanvas.Body>
          <Dropdown.Item href="today-tasks">Today's Tasks</Dropdown.Item>
          <Dropdown.Item href="all-tasks">All Tasks</Dropdown.Item>
          <Dropdown.Item href="important-tasks">Important Tasks</Dropdown.Item>
          <Dropdown.Item href="completed-tasks">Completed Tasks</Dropdown.Item>
          <Dropdown.Item href="uncompleted-tasks">
            Unompleted Tasks
          </Dropdown.Item>
        </Offcanvas.Body>
      </OffcanvasContainer>
      <TaskModal
        showAddNewTask={showAddNewTask}
        setShowAddNewTask={setShowAddNewTask}
        taskMode={"Add"}
        setTasks={setTasks}
        tasks={tasks}
      />
    </>
  );
};

export default LeftSideBar;
