// Imports
import React from "react";

// import functions
import formatDate from "Utils/formatDate";

// import styles
import {
  Container,
  TaskInfo,
  Title,
  Description,
  Date,
} from "./CardTaskList.styled";

const CardTaskList = ({ taskData, setTasks, tasks }) => {
  return (
    <Container>
      <TaskInfo>
        <Title>{taskData.title}</Title>
        <Description>{taskData.description}</Description>
        <Date>{formatDate(taskData.date)}</Date>
      </TaskInfo>
    </Container>
  );
};

export default CardTaskList;
