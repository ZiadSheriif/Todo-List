import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FiList } from "react-icons/fi";
import { CiGrid41 } from "react-icons/ci";
import { Form } from 'react-bootstrap';

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
  const [sortCriteria, setSortCriteria] = useState("dueDate"); // New state for sorting criteria
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

  const handleSortChange = (event) => {
    console.log(event.target.value)
    setSortCriteria(event.target.value);
  };

  // Sorting function
  const sortTasks = (tasks) => {
    switch (sortCriteria) {
      case "dueDate":
        return tasks.sort((a, b) => new Date(a.date) - new Date(b.date));
      case "priority":
        return tasks.sort((a, b) => b.important - a.important);
      default:
        return tasks;
    }
  };

  // Get the filtered tasks based on the current URL
  const getFilteredTasks = () => {
    let filteredTasks = storedTasks;

    switch (navStateTasks) {
      case "today-tasks":
        filteredTasks = storedTasks.filter(
          (task) => formatDate(task.date) === formatDate(new Date())
        );
        break;
      case "important-tasks":
        filteredTasks = storedTasks.filter((task) => task.important);
        break;
      case "completed-tasks":
        filteredTasks = storedTasks.filter(
          (task) => task.completed === "completed"
        );
        break;
      case "uncompleted-tasks":
        filteredTasks = storedTasks.filter(
          (task) => task.completed === "uncompleted"
        );
        break;
      default:
        break;
    }

    // Apply sorting
    return sortTasks(filteredTasks);
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
          <div>
            <Form.Label htmlFor="sort">Sort by:</Form.Label>
            <Form.Select id="sort" value={sortCriteria} onChange={handleSortChange}>
              <option value="dueDate">Due Date</option>
              <option value="priority">Priority</option>
            </Form.Select>
          </div>
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
              path="/*"
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
