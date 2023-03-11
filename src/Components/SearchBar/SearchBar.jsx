import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { InputSearchContainer, StyledSearchIcon } from "./SearchBar.styled";

/**
 * Component that allows user to search on a specific task
 * @returns {React.Component}
 */
const SearchBar = ({ handleInputChange, searchTerm }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  return (
    <InputSearchContainer>
      <StyledSearchIcon size={22} />
      <Form.Control
        type="text"
        onChange={handleInputChange}
        placeholder="Search on Task"
        onKeyDown={handleKeyPress}
        value={searchTerm}
      />
    </InputSearchContainer>
  );
};

export default SearchBar;
