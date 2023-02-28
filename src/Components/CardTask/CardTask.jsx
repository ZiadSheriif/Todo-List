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

/**
 * function that handles  date format
 * @param {string} dateString
 * @returns formated date  string
 */
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const formatedDate = day + "/" + month + "/" + year;
  return formatedDate;
};
/**
 * Component that displays card task that contains the information of task
 *
 * @returns {React.Component}
 */
const CardTask = ({ title, description, date, important, setTasks, tasks }) => {
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
        <Card.Text>{formatDate(date)}</Card.Text>
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
        setTasks={setTasks}
      />
      <TaskModal
        showAddNewTask={showAddNewTask}
        setShowAddNewTask={setShowAddNewTask}
        taskMode={"Edit"}
        titleTask={title}
        tasks={tasks}
        setTasks={setTasks}
      />
    </CardContainer>
  );
};

export default CardTask;
