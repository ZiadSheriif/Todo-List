// Imports
import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from "react-bootstrap/Dropdown";
import TaskModal from "Components/TaskModal/TaskModal";
import { useLocation } from "react-router-dom";

// import styles
import {
  OffcanvasContainer,
  Header,
  TaskBtn,
  NavBtn,
} from "./LeftSideBar.styled";

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
  const location = useLocation();
  const url = location.pathname;
  const allTasks = url.split("/")[1];
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
          <NavBtn to="today-tasks" exact>
            Today's Tasks
          </NavBtn>
          <NavBtn to="all-tasks" className={allTasks ? "" : "active"}>
            All Tasks
          </NavBtn>
          <NavBtn to="important-tasks" exact>
            Important Tasks
          </NavBtn>
          <NavBtn to="completed-tasks" exact>
            Completed Tasks
          </NavBtn>
          <NavBtn to="uncompleted-tasks" exact>
            Unompleted Tasks
          </NavBtn>
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
