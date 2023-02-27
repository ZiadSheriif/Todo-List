// Imports
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiDotsVerticalRounded } from "react-icons/bi";

//import styles
import { CardContainer, StatusBtn, Footer, Settings } from "./CardTask.styled";

// import components
import DeleteTaskModal from "Components/DeleteTaskModal/DeleteTaskModal";
import TaskModal from "Components/TaskModal/TaskModal";
import useLocalStorage from "Hooks/useLocalStorage";
const newTask = [
  {
    title: "Task 1",
    description: "This is a new task",
    date: "2023-03-01",
  },
  {
    title: "Task 2",
    description: "This is a new task",
    date: "2023-03-03",
  },
  {
    title: "Task 3",
    description: "This is a new task",
    date: "2023-04-24",
  },
];
/**
 * Component that displays card task that contains the information of task
 *
 * @returns {React.Component}
 */
const CardTask = ({ title, description, date, important }) => {
  // Use states
  const [state, setState] = useState("completed");
  const [starTask, setStarTask] = useState(false);
  const [deleteTask, setDeleteTask] = useState(false);
  const [showAddNewTask, setShowAddNewTask] = useState(false);
  // localStorage.removeItem("mangaa");

  // handle state change of task progress
  const handleToggleState = () => {
    if (state === "completed") setState("uncompleted");
    else setState("completed");
  };

  const handleFavoriteTasks = () => {
    if (starTask) setStarTask(false);
    else setStarTask(true);
  };

  return (
    <CardContainer style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-dark">{description}</Card.Subtitle>
        <Card.Text>{date}</Card.Text>
      </Card.Body>
      <hr />
      <Footer>
        <StatusBtn colorState={state} onClick={handleToggleState}>
          {state}
        </StatusBtn>
        <Settings>
          {!starTask && (
            <AiOutlineStar onClick={handleFavoriteTasks} size={25} />
          )}
          {starTask && <AiFillStar onClick={handleFavoriteTasks} size={25} />}
          <RiDeleteBinLine onClick={() => setDeleteTask(true)} size={25} />
          <BiDotsVerticalRounded
            onClick={() => setShowAddNewTask(true)}
            size={25}
          />
        </Settings>
      </Footer>
      <DeleteTaskModal
        deleteTask={deleteTask}
        setDeleteTask={setDeleteTask}
        singleTask={true}
        titleTask={title}
      />
      <TaskModal
        showAddNewTask={showAddNewTask}
        setShowAddNewTask={setShowAddNewTask}
        taskMode={"Edit"}
        titleTask={title}
      />
    </CardContainer>
  );
};

export default CardTask;
