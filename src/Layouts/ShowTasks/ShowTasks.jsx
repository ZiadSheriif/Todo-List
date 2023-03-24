import React from "react";
import CardTask from "Components/CardTask/CardTask";
import { ContainerTasks } from "Pages/HomePage/HomePage.styled";

// Define a new React component called ShowTasks
// This component takes three props: filteredTasks, setTasks, and viewTask
const ShowTasks = ({ filteredTasks, setTasks, viewTask }) => {
  // Get the stored tasks from local storage and parse the JSON string
  const storedTasks = JSON.parse(localStorage.getItem("tasks"));

  return (
    <>
      <ContainerTasks>
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
      </ContainerTasks>
    </>
  );
};

// Export the ShowTasks component as the default export of this module
export default ShowTasks;
