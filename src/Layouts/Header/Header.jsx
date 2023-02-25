// Imports
import React, { useState } from "react";

// import styles
import {
  TaskBtn,
  Container,
  DateContainer,
  NotificationContainer,
} from "./Header.styled";

// import components
import SearchBar from "Components/SearchBar/SearchBar";
import AddTaskModal from "Components/AddTaskModal/AddTaskModal";
import { MdNotifications } from "react-icons/md";

let currentDate = new Date().toLocaleDateString();

/**
 * Layout that displays header of page which contains search-bar ,date and new task button
 * @returns {React.Layout}
 */
const Header = () => {
  const [showAddNewTask, setShowAddNewTask] = useState(false);
  return (
    <Container>
      <SearchBar />
      <DateContainer>{currentDate}</DateContainer>
      <NotificationContainer>
        <MdNotifications size={32} />
        <TaskBtn
          onClick={() => {
            setShowAddNewTask(true);
          }}
          variant="primary"
        >
          Add New Task
        </TaskBtn>{" "}
      </NotificationContainer>
      <AddTaskModal
        showAddNewTask={showAddNewTask}
        setShowAddNewTask={setShowAddNewTask}
      />
    </Container>
  );
};

export default Header;
