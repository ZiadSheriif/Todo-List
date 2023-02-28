// Imports
import React, { useEffect, useState } from "react";
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
} from "./HomePage.styled";

// Import Components
import LeftSideBar from "Components/LeftSideBar/LeftSideBar";
import RightSideBar from "Components/RightSideBar/RightSideBar";
import Header from "Layouts/Header/Header";
import CardTask from "Components/CardTask/CardTask";

/**
 * Home page that displays main content of website
 *
 * @param {function handleToggleTheme()} handleToggleTheme  function that toggles the theme
 * @returns {React.Page}
 */
const HomePage = ({ handleToggleTheme,setCheckedSwitch,checkedSwitch }) => {
  // const newTask = [
  //   {
  //     title: "Task 1",
  //     description: "This is a new task",
  //     date: "2023-03-01",
  //   },
  //   {
  //     title: "Task 2",
  //     description: "This is a new task",
  //     date: "2023-03-03",
  //   },
  //   {
  //     title: "Task 3",
  //     description: "This is a new task",
  //     date: "2023-04-24",
  //   },
  // ];
  // localStorage.setItem("tasks", JSON.stringify(newTask));

  // Use Effects
  const [tasks, setTasks] = useState([]);
  const storedTasks = JSON.parse(localStorage.getItem("tasks"));

  useEffect(() => {}, [storedTasks]);
  return (
    <Container>
      <Section>
        <LeftSideBar setTasks={setTasks} tasks={tasks} />
      </Section>
      <CenterContainer>
        <Header setTasks={setTasks} tasks={tasks} />
        <CurrentItem>
          All tasks ({storedTasks && storedTasks.length} tasks)
        </CurrentItem>
        <ShapeView>
          <ChildView>
            <FiList size={25} />
          </ChildView>
          <ChildView>
            <CiGrid41 size={25} />
          </ChildView>
        </ShapeView>
        <ContainerTasks>
          {storedTasks &&
            storedTasks.map((task, index) => {
              return (
                <CardTask
                  key={index}
                  title={task.title}
                  description={task.description}
                  date={task.date}
                  important={task.important}
                  setTasks={setTasks}
                />
              );
            })}
        </ContainerTasks>
      </CenterContainer>
      <Section>
        <RightSideBar
          handleToggleTheme={handleToggleTheme}
          setTasks={setTasks}
          setCheckedSwitch={setCheckedSwitch}
          checkedSwitch={checkedSwitch}
        />
      </Section>
    </Container>
  );
};

export default HomePage;
