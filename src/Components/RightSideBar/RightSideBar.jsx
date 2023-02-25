// Imports
import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import userIcon from "Assets/user.jfif";
// import { useNavigate } from "react-router-dom";

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
const RightSideBar = ({ handleToggleTheme }) => {
  //   const navigate = useNavigate();

  // delete all task
  const deleteAllTasks = () => {};
  return (
    <OffcanvasContainer placement={"end"} show={true} backdrop={false}>
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
            <Form.Check type="switch" id="custom-switch" />
          </FormSwitcher>
        </ButtonContainer>{" "}
        <ProgressContainer>
          <span>All tasks</span>
          <ProgressBarContainer now={60} label={`${70}%`} />
        </ProgressContainer>
      </Header>
      <hr />
      <Offcanvas.Body>
        <Dropdown.Item href="today-tasks">No tasks today </Dropdown.Item>
      </Offcanvas.Body>
      <Footer>
        <DeleteBtn onClick={deleteAllTasks}>Delete all task</DeleteBtn>
        <ProfileBtn
        //   onClick={() => navigate("https://github.com/ZiadSheriif/Todo-List")}
        >
          Projected by Ziad Sherif
        </ProfileBtn>{" "}
      </Footer>
    </OffcanvasContainer>
  );
};

export default RightSideBar;
