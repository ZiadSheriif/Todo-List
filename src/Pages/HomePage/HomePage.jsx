// Imports
import React from "react";
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
  return (
    <Container>
      <Section>
        <LeftSideBar />
      </Section>
      <CenterContainer>
        <Header />
        <CurrentItem>All tasks (3 tasks)</CurrentItem>
        <ShapeView>
          <ChildView>
            <FiList size={25} />
          </ChildView>
          <ChildView>
            <CiGrid41 size={25} />
          </ChildView>
        </ShapeView>
        <ContainerTasks>
          <CardTask />
          <CardTask />
          <CardTask />
          <CardTask />
          <CardTask />
          <CardTask />
        </ContainerTasks>
      </CenterContainer>
      <Section>
        <RightSideBar handleToggleTheme={handleToggleTheme} />
      </Section>
    </Container>
  );
};

export default HomePage;
