// Imports
import React, { useState, useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import userIcon from "Assets/images/user.jfif";
import { useNavigate, Link } from "react-router-dom";

// import components
import DeleteTaskModal from "Components/DeleteTaskModal/DeleteTaskModal";

// import styles
import {
  OffcanvasContainer,
  Header,
  ProfileBtn,
  IcoContainer,
  Footer,
  DeleteBtn,
  FormSwitcher,
  ButtonContainer,
  ProgressContainer,
  ProgressBarContainer,
} from "./RightSideBar.styled";

/**
 * Component that displays side bar of which includes task progress
 * @returns {React.Component}
 */
const RightSideBar = ({
  handleToggleTheme,
  setTasks,
  checkedSwitch,
  numberOfCompletedTasks,
  allTasksLength,
}) => {
  // const navigate = useNavigate();
  const [deleteTask, setDeleteTask] = useState(false);
  const [completedTasks, setCompletedTasks] = useState(null);
  // delete all task
  const handleDeleteAllTasks = () => {
    setDeleteTask(true);
  };
  const calculateProgress = () => {
    const decimaledNumber = (
      (numberOfCompletedTasks / allTasksLength) *
      100
    ).toFixed(2);
    const result = decimaledNumber.includes(".")
      ? parseFloat(decimaledNumber)
      : parseInt(decimaledNumber);
    setCompletedTasks(result);
  };

  useEffect(() => {
    calculateProgress();
  }, [completedTasks]);

  return (
    <OffcanvasContainer
      placement={"end"}
      show={true}
      backdrop={false}
      enforceFocus={false}
      scroll={true}
    >
      <Header>
        <Offcanvas.Title>
          Hi, User{" "}
          <IcoContainer>
            <img src={userIcon} alt="user-ico" />
          </IcoContainer>
        </Offcanvas.Title>
        <ButtonContainer onClick={handleToggleTheme}>
          <span>Darkmode</span>
          <FormSwitcher>
            <Form.Check
              type="switch"
              id="custom-switch"
              checked={JSON.parse(checkedSwitch)}
            />
          </FormSwitcher>
        </ButtonContainer>{" "}
        <ProgressContainer>
          <span>All tasks</span>
          <ProgressBarContainer
            now={completedTasks}
            label={`${completedTasks}%`}
          />
        </ProgressContainer>
      </Header>
      <hr />
      <Offcanvas.Body>
        <Dropdown.Item href="today-tasks">No tasks today </Dropdown.Item>
      </Offcanvas.Body>
      <Footer>
        <DeleteBtn onClick={handleDeleteAllTasks}>Delete all task</DeleteBtn>
        <ProfileBtn>
          <a href="https://github.com/ZiadSheriif">Projected by Ziad Sherif</a>
        </ProfileBtn>{" "}
        <DeleteTaskModal
          deleteTask={deleteTask}
          setDeleteTask={setDeleteTask}
          singleTask={false}
          titleTask={"-1"}
          setTasks={setTasks}
        />
      </Footer>
    </OffcanvasContainer>
  );
};

export default RightSideBar;
