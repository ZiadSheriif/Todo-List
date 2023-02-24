// Imports
import React from "react";
import Button from "react-bootstrap/Button";

// Import styles
import { Container, CenterContainer } from "./HomePage.styled";

// Import Componens
import LeftSideBar from "Components/LeftSideBar/LeftSideBar";
import Header from "Layouts/Header/Header";
import CardTask from "Components/CardTask/CardTask";

const HomePage = ({ handleToggleTheme }) => {
  return (
    <>
      <Container>
        <LeftSideBar />
        <CenterContainer>
          <CardTask />
          <Header />
          <Button onClick={handleToggleTheme} variant="warning">
            Warning
          </Button>{" "}
        </CenterContainer>
      </Container>
    </>
  );
};

export default HomePage;
