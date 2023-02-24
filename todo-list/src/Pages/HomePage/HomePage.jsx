import React from "react";
import LeftSideBar from "Components/LeftSideBar/LeftSideBar";
import Button from "react-bootstrap/Button";

import { Container } from "./HomePage.styled";
const HomePage = ({ handleToggleTheme }) => {
  return (
    <Container>
      <LeftSideBar />
      <Button onClick={handleToggleTheme} variant="warning">
        Warning
      </Button>{" "}
    </Container>
  );
};

export default HomePage;
