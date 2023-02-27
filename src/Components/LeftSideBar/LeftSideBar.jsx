// Imports
import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from "react-bootstrap/Dropdown";
import { OffcanvasContainer, Header, TaskBtn } from "./LeftSideBar.styled";

// import components
import TaskModal from "Components/TaskModal/TaskModal";

/**
 * Component that displays side bar of which includes task progress
 * @returns {React.Component}
 */
const LeftSideBar = () => {
  const [showAddNewTask, setShowAddNewTask] = useState(false);
  return (
    <>
      <OffcanvasContainer show={true} backdrop={false} enforceFocus={false}>
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
          <Dropdown.Item href="aLl-tasks">All Tasks</Dropdown.Item>
          <Dropdown.Item href="omportant-tasks">Important Tasks</Dropdown.Item>
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
      />
    </>
  );
};

export default LeftSideBar;
