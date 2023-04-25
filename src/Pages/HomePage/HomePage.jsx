// Imports
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FiList } from "react-icons/fi";
import { CiGrid41 } from "react-icons/ci";

// Import styles
import {
  Container,
  CenterContainer,
  Section,
  CurrentItem,
  ShapeView,
  ChildView,
  HomeContainer,
} from "./HomePage.styled";

// Import Components
import LeftSideBar from "Components/LeftSideBar/LeftSideBar";
import RightSideBar from "Components/RightSideBar/RightSideBar";
import Header from "Layouts/Header/Header";
import ShowTasks from "Layouts/ShowTasks/ShowTasks";
import formatDate from "Utils/formatDate";

/**
 * Home page that displays main content of website
 *
 * @param {function handleToggleTheme()} handleToggleTheme  function that toggles the theme
 * @returns {React.Page}
 */
const HomePage = ({ handleToggleTheme, checkedSwitch }) => {
  // Use States
  const [tasks, setTasks] = useState([]);
  const [viewTask, setViewTask] = useState(true);
  const storedTasks = JSON.parse(localStorage.getItem("tasks"));
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const url = location.pathname;
  const navStateTasks = url.split("/")[1];

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleViewList = () => {
    setViewTask(false);
  };
  const handleViewGrid = () => {
    setViewTask(true);
  };

  // Get the filtered tasks based on the current URL
  const getFilteredTasks = () => {
    switch (navStateTasks) {
      case "today-tasks":
        return storedTasks.filter(
          (task) => formatDate(task.date) === formatDate(new Date())
        );
      case "important-tasks":
        return storedTasks.filter((task) => task.important);
      case "completed-tasks":
        return storedTasks.filter((task) => task.completed === "completed");
      case "uncompleted-tasks":
        return storedTasks.filter((task) => task.completed === "uncompleted");
      default:
        return storedTasks;
    }
  };

  const checkUrl = (url) => {
    if (
      !(
        url === "today-tasks" ||
        url === "important-tasks" ||
        url === "today-tasks" ||
        url === "uncompleted-tasks" ||
        url === "all-tasks"
      )
    ) {
      return "all-tasks";
    }
    return navStateTasks;
  };

  // Set the current tasks to be the active link
  const currentTasksInPageView = getFilteredTasks();

  const filteredTasks = currentTasksInPageView.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // get completed tasks
  const completedTasks = tasks.filter((task) => task.completed === "completed");
  const numberOfCompletedTasks = completedTasks.length;

  // Use Effects
  useEffect(() => {}, [storedTasks, filteredTasks, currentTasksInPageView]);
  return (
    <HomeContainer>
      <Container>
        <Section>
          <LeftSideBar setTasks={setTasks} tasks={tasks} />
        </Section>
        <CenterContainer>
          <Header
            setTasks={setTasks}
            tasks={tasks}
            handleInputChange={handleInputChange}
            searchTerm={searchTerm}
            storedTasks={storedTasks}
          />
          <CurrentItem>
            {checkUrl(navStateTasks)} (
            {storedTasks && currentTasksInPageView.length} tasks)
          </CurrentItem>
          <ShapeView>
            <ChildView onClick={handleViewList}>
              <FiList size={25} />
            </ChildView>
            <ChildView onClick={handleViewGrid}>
              <CiGrid41 size={25} />
            </ChildView>
          </ShapeView>
          <Routes>
            <Route
              path="all-tasks"
              element={
                <ShowTasks
                  filteredTasks={filteredTasks}
                  viewTask={viewTask}
                  setTasks={setTasks}
                />
              }
            />
            <Route
              path="today-tasks"
              element={
                <ShowTasks
                  filteredTasks={filteredTasks}
                  viewTask={viewTask}
                  setTasks={setTasks}
                />
              }
            />
            <Route
              path="important-tasks"
              element={
                <ShowTasks
                  filteredTasks={filteredTasks}
                  viewTask={viewTask}
                  setTasks={setTasks}
                />
              }
            />
            <Route
              path="completed-tasks"
              element={
                <ShowTasks
                  filteredTasks={filteredTasks}
                  viewTask={viewTask}
                  setTasks={setTasks}
                />
              }
            />
            <Route
              path="uncompleted-tasks"
              element={
                <ShowTasks
                  filteredTasks={filteredTasks}
                  viewTask={viewTask}
                  setTasks={setTasks}
                />
              }
            />
            <Route
              path="Todo-List"
              element={
                <ShowTasks
                  filteredTasks={filteredTasks}
                  viewTask={viewTask}
                  setTasks={setTasks}
                />
              }
            />
          </Routes>
        </CenterContainer>
        <Section>
          <RightSideBar
            handleToggleTheme={handleToggleTheme}
            setTasks={setTasks}
            checkedSwitch={checkedSwitch}
            numberOfCompletedTasks={numberOfCompletedTasks}
            allTasksLength={storedTasks.length}
          />
        </Section>
      </Container>
    </HomeContainer>
  );
};

export default HomePage;
