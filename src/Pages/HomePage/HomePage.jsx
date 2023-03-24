// Imports
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FiList } from "react-icons/fi";
import { CiGrid41 } from "react-icons/ci";

// Import styles
import {
  Container,
  CenterContainer,
  ContainerTasks,
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
import CardTask from "Components/CardTask/CardTask";
import ShowTasks from "Layouts/ShowTasks/ShowTasks";

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
  const NavStateTasks = url.split("/")[1];

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleViewList = () => {
    setViewTask(false);
  };
  const handleViewGrid = () => {
    setViewTask(true);
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filter tasks to show only the selected task
  // const selectedTask = tasks.find((task) => task.id === taskId);
  // const tasksToDisplay = selectedTask ? [selectedTask] : filteredTasks;

  // get completed tasks
  const completedTasks = tasks.filter((task) => task.completed === "completed");
  const numberOfCompletedTasks = completedTasks.length;

  // get uncompleted tasks
  // const uncompletedTasks = tasks.filter(
  //   (task) => task.completed === "uncompleted"
  // );

  // get tasks today
  // const today = new Date().toISOString().slice(0, 10); // Get today's date in ISO string format (yyyy-mm-dd)
  // const todaysTasks = tasks.filter((task) => task.date === today);

  // get important tasks
  // const importantTasks = tasks.filter(
  //   (task) => task.importance === "important"
  // );

  // Use Effects
  useEffect(() => {}, [storedTasks]);
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
          />
          <CurrentItem>
            {NavStateTasks} ({storedTasks && storedTasks.length} tasks)
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
          </Routes>
          {/* <ContainerTasks>
            {storedTasks &&
              filteredTasks.map((task, index) => {
                return (
                  <CardTask
                    key={index}
                    setTasks={setTasks}
                    taskData={task}
                    viewTask={viewTask}
                  />
                );
              })}
          </ContainerTasks> */}
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
