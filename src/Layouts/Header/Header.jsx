// Imports
import React, { useState, useContext } from "react";
import AuthContext from "Contexts/Toast-Context";

// import styles
import {
  TaskBtn,
  Container,
  DateContainer,
  NotificationContainer,
  NotificationIcon,
  NotificationBadge,
} from "./Header.styled";

// import components
import SearchBar from "Components/SearchBar/SearchBar";
import TaskModal from "Components/TaskModal/TaskModal";
import ToastModal from "Components/ToastModal/ToastModal";
import formatDate from "Utils/formatDate";
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
const Header = ({
  setTasks,
  tasks,
  handleInputChange,
  searchTerm,
  storedTasks,
}) => {
  const ctx = useContext(AuthContext);
  const getTodayAndUnCompletedTasks = () => {
    return storedTasks.filter(
      (task) =>
        formatDate(task.date) === formatDate(new Date()) &&
        task.completed === "uncompleted"
    );
  };

  const todayTasks = getTodayAndUnCompletedTasks();

  // State to control the visibility of the add new task modal
  const [showAddNewTask, setShowAddNewTask] = useState(false);
  const [notificationCount, setNotificationCount] = useState(todayTasks.length);

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
      <NotificationContainer onClick={ctx.setShowToast}>
        <NotificationIcon>
          <MdNotifications size={32} />
          {notificationCount > 0 && (
            <NotificationBadge>{notificationCount}</NotificationBadge>
          )}
        </NotificationIcon>
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
      <ToastModal TasksCount={todayTasks.length} />
    </Container>
  );
};

export default Header;
