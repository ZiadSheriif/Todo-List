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
const CardTask = ({ taskData, setTasks, tasks }) => {
  //  state that handle task is completed or  not
  const [state, setState] = useState(taskData.completed);
  //  state that handle task is important or not
  const [starTask, setStarTask] = useState(taskData.important);
  const [deleteTask, setDeleteTask] = useState(false);
  const [showAddNewTask, setShowAddNewTask] = useState(false);

  // handle state change of task progress
  const handleToggleState = () => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    const taskToEdit = storedTasks.find(
      (task) => task.title === taskData.title
    );

    if (taskToEdit.completed === "completed") {
      taskToEdit.completed = "uncompleted";
    } else taskToEdit.completed = "completed";
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
    setState(taskToEdit.completed);
  };

  // handle is favorite task or not
  const handleFavoriteTasks = () => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    const taskToEdit = storedTasks.find(
      (task) => task.title === taskData.title
    );

    if (taskToEdit.important) {
      taskToEdit.important = false;
    } else taskToEdit.important = true;
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
    setStarTask(taskToEdit.important);
  };

  return (
    <CardContainer style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{taskData.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-dark">
          {taskData.description}
        </Card.Subtitle>
        <Card.Text>{formatDate(taskData.date)}</Card.Text>
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
        titleTask={taskData.title}
        setTasks={setTasks}
      />
      <TaskModal
        showAddNewTask={showAddNewTask}
        setShowAddNewTask={setShowAddNewTask}
        taskMode={"Edit"}
        titleTask={taskData.title}
        tasks={tasks}
        setTasks={setTasks}
      />
    </CardContainer>
  );
};

export default CardTask;
