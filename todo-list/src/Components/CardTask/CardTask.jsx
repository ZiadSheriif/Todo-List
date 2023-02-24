import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

import { CardContainer, Line, StatusBtn } from "./CardTask.styled";
const CardTask = () => {
  const [state, setState] = useState("Completed");

  const handleToggleState = () => {
    if (state === "completed") setState("uncompleted");
    else setState("completed");
  };
  return (
    <CardContainer style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Task 1</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          This is the description for this task
        </Card.Subtitle>
        <Card.Text>04/12/2023</Card.Text>
      </Card.Body>
      <Line />
      <footer>
        <StatusBtn onClick={handleToggleState}>{state}</StatusBtn>
      </footer>
    </CardContainer>
  );
};

export default CardTask;
