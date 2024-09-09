// Imports
import React, { useState, useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
// import userIcon from "Assets/images/user.jfif";
import DeleteTaskModal from "Components/DeleteTaskModal/DeleteTaskModal";

// import styles
import {
  OffcanvasContainer,
  Header,
  ProfileBtn,
  // IcoContainer,
  Footer,
  DeleteBtn,
  FormSwitcher,
  ButtonContainer,
  ProgressContainer,
  ProgressBarContainer,
} from "./RightSideBar.styled";

/**
 * Displays the sidebar that includes the task progress, delete all task button, and user profile information.
 *
 * @param {Object} props - An object containing the following properties:
 *   handleToggleTheme {Function} - A function to toggle the theme of the app.
 *   setTasks {Function} - A function to set the tasks in the app.
 *   checkedSwitch {Boolean} - A boolean value to indicate whether the dark mode is turned on or off.
 *   numberOfCompletedTasks {Number} - The number of completed tasks.
 *   allTasksLength {Number} - The total number of tasks.
 * @returns {React.Component} - The React component for the right sidebar.
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

  // This function is called to calculate the progress of the completed tasks.


  // The progress is calculated whenever the completed tasks state changes.
  useEffect(() => {
    const calculateProgress = () => {
      if (allTasksLength === 0) {
        setCompletedTasks(0);
        return;
      }
      const decimaledNumber = (
        (numberOfCompletedTasks / allTasksLength) *
        100
      ).toFixed(2);
      const result = decimaledNumber.includes(".")
        ? parseFloat(decimaledNumber)
        : parseInt(decimaledNumber);
      setCompletedTasks(result);
    };
    calculateProgress();
  }, [completedTasks, allTasksLength, numberOfCompletedTasks]);

  return (
    <OffcanvasContainer
      placement={"end"}
      show={true}
      backdrop={false}
      enforceFocus={false}
      scroll={true}
    >
      <Header>
        {/* <Offcanvas.Title>
          Hi, User{" "}
          <IcoContainer>
            <img src={userIcon} alt="user-ico" />
          </IcoContainer>
        </Offcanvas.Title> 
          We don't have an authentication system now, so there is no need to that.
        */}
        <Offcanvas.Title>
          Sidebar
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
        <Dropdown.Item href="#/today-tasks">No tasks today </Dropdown.Item>
      </Offcanvas.Body>
      <Footer>
        <DeleteBtn onClick={handleDeleteAllTasks}>Delete all task</DeleteBtn>
        <ProfileBtn>
          <a href="https://github.com/ZiadSheriif/Todo-List">Open-Source on GitHub!</a>
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
