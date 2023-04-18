// Imports
import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsFillCalendarDateFill } from "react-icons/bs";

//import styles
import {
  CardContainer,
  StatusBtn,
  Footer,
  Settings,
  IconContainer,
  DateContainer,
} from "./CardTask.styled";

// import components
import DeleteTaskModal from "Components/DeleteTaskModal/DeleteTaskModal";
import TaskModal from "Components/TaskModal/TaskModal";
import formatDate from "Utils/formatDate";
/**
 * Component that displays card task that contains the information of task
 *
 * @returns {React.Component}
 */
const CardTask = ({ taskData, setTasks, tasks, viewTask }) => {
  //  state that handle task is completed or  not
  const [state, setState] = useState(taskData.completed);
  //  state that handle task is important or not
  const [starTask, setStarTask] = useState(taskData.important);
  const [deleteTask, setDeleteTask] = useState(false);
  const [showAddNewTask, setShowAddNewTask] = useState(false);
  const storedTasks = JSON.parse(localStorage.getItem("tasks"));
  const taskToEdit = storedTasks.find((task) => task.title === taskData.title);

  // handle state change of task progress
  const handleToggleState = () => {
    if (taskToEdit.completed === "completed") {
      taskToEdit.completed = "uncompleted";
    } else taskToEdit.completed = "completed";
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
    setState(taskToEdit.completed);
  };

  // handle is favorite task or not
  const handleFavoriteTasks = () => {
    if (taskToEdit.important) {
      taskToEdit.important = false;
    } else taskToEdit.important = true;
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
    setStarTask(taskToEdit.important);
  };

  useEffect(() => {
    setState(taskData.completed);
    setStarTask(taskData.important);
  }, [taskData]);

  return (
    <CardContainer viewTask={viewTask}>
      <Card.Body>
        <Card.Title>{taskData.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-dark">
          {taskData.description}
        </Card.Subtitle>
        <Card.Text>
          <DateContainer>
            <span>
              <BsFillCalendarDateFill />
            </span>
            <span>{formatDate(taskData.date)}</span>
          </DateContainer>
        </Card.Text>
      </Card.Body>
      <hr />
      <Footer viewTask={viewTask}>
        <StatusBtn
          viewTask={viewTask}
          colorState={state}
          onClick={handleToggleState}
        >
          {state}
        </StatusBtn>
        <Settings viewTask={viewTask}>
          {!starTask && (
            <IconContainer>
              <AiOutlineStar onClick={handleFavoriteTasks} size={25} />
            </IconContainer>
          )}
          <IconContainer>
            {starTask && <AiFillStar onClick={handleFavoriteTasks} size={25} />}
          </IconContainer>
          <IconContainer>
            <RiDeleteBinLine onClick={() => setDeleteTask(true)} size={25} />
          </IconContainer>
          <IconContainer>
            <BiDotsVerticalRounded
              onClick={() => setShowAddNewTask(true)}
              size={25}
            />
          </IconContainer>
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
