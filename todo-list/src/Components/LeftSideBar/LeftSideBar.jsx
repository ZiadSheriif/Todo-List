import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from "react-bootstrap/Dropdown";

import { OffcanvasContainer, Header, TaskBtn } from "./LeftSideBar.styled";
const LeftSideBar = () => {
  return (
    <OffcanvasContainer show={true} backdrop={false}>
      <Header>
        <Offcanvas.Title>to-do list</Offcanvas.Title>
        <TaskBtn variant="primary">Add New Task</TaskBtn>{" "}
      </Header>
      <Offcanvas.Body>
        <Dropdown.Item href="#/action-1">Today's Tasks</Dropdown.Item>
        <Dropdown.Item href="#/action-2">All Tasks</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Important Tasks</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Completed Tasks</Dropdown.Item>
        <Dropdown.Item href="#/action-5">Unompleted Tasks</Dropdown.Item>
      </Offcanvas.Body>
    </OffcanvasContainer>
  );
};

export default LeftSideBar;
