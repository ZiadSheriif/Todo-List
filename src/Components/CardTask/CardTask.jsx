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

/**
 * Component that displays card task that contains the information of task
 *
 * @returns {React.Component}
 */
const CardTask = () => {
  // Use states
  const [state, setState] = useState("completed");
  const [starTask, setStarTask] = useState(false);
  const [deleteTask, setDeleteTask] = useState(false);

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
        <Card.Title>Task 1</Card.Title>
        <Card.Subtitle className="mb-2 text-dark">
          This is the description for this task
        </Card.Subtitle>
        <Card.Text>04/12/2023</Card.Text>
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
          <BiDotsVerticalRounded size={25} />
        </Settings>
      </Footer>
      <DeleteTaskModal deleteTask={deleteTask} setDeleteTask={setDeleteTask} />
    </CardContainer>
  );
};

export default CardTask;
