import React, { useState } from "react";

// import styles
import { TaskBtn, Container } from "./Header.styled";

// import components
import SearchBar from "Components/SearchBar/SearchBar";
import AddTaskModal from "Components/AddTaskModal/AddTaskModal";

const Header = () => {
  const [showAddNewTask, setShowAddNewTask] = useState(false);
  return (
    <Container>
      <SearchBar />
      <TaskBtn
        onClick={() => {
          setShowAddNewTask(true);
        }}
        variant="primary"
      >
        Add New Task
      </TaskBtn>{" "}
      <AddTaskModal
        showAddNewTask={showAddNewTask}
        setShowAddNewTask={setShowAddNewTask}
      />
    </Container>
  );
};

export default Header;
