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
import TaskModal from "Components/TaskModal/TaskModal";
import { MdNotifications } from "react-icons/md";

// Get the current date
let currentDate = new Date().toLocaleDateString();

/**
 * Layout that displays header of page which contains search-bar ,date and new task button
 * @param {Object} props - The component props
 * @param {Function} props.setTasks - The function to update the list of tasks
 * @param {Array} props.tasks - The list of tasks
 * @param {Function} props.handleInputChange - The function to handle changes in the search bar
 * @param {string} props.searchTerm - The current search term entered in the search bar
 * @returns {React.Layout} The header component
 */
const Header = ({ setTasks, tasks, handleInputChange, searchTerm }) => {
  // State to control the visibility of the add new task modal
  const [showAddNewTask, setShowAddNewTask] = useState(false);

  /**
   * Handles the click event for the new task button and shows the add new task modal
   */
  const handleNewTaskClick = () => {
    setShowAddNewTask(true);
  };

  return (
    <Container>
      <SearchBar
        tasks={tasks}
        handleInputChange={handleInputChange}
        searchTerm={searchTerm}
      />
      <DateContainer>{currentDate}</DateContainer>
      <NotificationContainer>
        <MdNotifications size={28} />
        <TaskBtn onClick={handleNewTaskClick} variant="primary">
          Add New Task
        </TaskBtn>{" "}
      </NotificationContainer>
      <TaskModal
        showAddNewTask={showAddNewTask}
        setShowAddNewTask={setShowAddNewTask}
        taskMode={"Add"}
        setTasks={setTasks}
        tasks={tasks}
      />
    </Container>
  );
};

export default Header;
