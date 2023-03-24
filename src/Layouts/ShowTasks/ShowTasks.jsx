import React from "react";
import CardTask from "Components/CardTask/CardTask";
import { ContainerTasks } from "Pages/HomePage/HomePage.styled";

// Define a new React component called ShowTasks
// This component takes three props: filteredTasks, setTasks, and viewTask
const ShowTasks = ({ filteredTasks, setTasks, viewTask }) => {
  return (
    <>
      <ContainerTasks>
        {filteredTasks.map((task, index) => {
          return (
            <CardTask
              key={index}
              setTasks={setTasks}
              taskData={task}
              viewTask={viewTask}
            />
          );
        })}
      </ContainerTasks>
    </>
  );
};

export default ShowTasks;
