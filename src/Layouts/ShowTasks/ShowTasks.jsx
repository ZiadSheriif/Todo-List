// Imports
import React from "react";
import CardTask from "Components/CardTask/CardTask";
import { ContainerTasks } from "Pages/HomePage/HomePage.styled";

/**
 * Renders a list of tasks based on the `filteredTasks` prop passed to it.
 * @param {Object} props - The component props.
 * @param {Array} props.filteredTasks - The list of tasks to render.
 * @param {Function} props.setTasks - The function to update the list of tasks.
 * @param {Function} props.viewTask - The function to display a single task.
 * @returns {React.Component} A React component that displays a list of tasks.
 */

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
