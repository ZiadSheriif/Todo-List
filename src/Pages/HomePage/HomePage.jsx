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
const HomePage = ({ handleToggleTheme }) => {
  // Use Effects
  let storedTasks = JSON.parse(localStorage.getItem("tasks"));
  useEffect(() => {}, [storedTasks.length]);
  return (
    <Container>
      <Section>
        <LeftSideBar />
      </Section>
      <CenterContainer>
        <Header />
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
            storedTasks.map((task) => {
              return (
                <CardTask
                  title={task.title}
                  description={task.description}
                  date={task.date}
                  important={task.important}
                />
              );
            })}
        </ContainerTasks>
      </CenterContainer>
      <Section>
        <RightSideBar handleToggleTheme={handleToggleTheme} />
      </Section>
    </Container>
  );
};

export default HomePage;
