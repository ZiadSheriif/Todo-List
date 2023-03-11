import React from "react";
import Form from "react-bootstrap/Form";

// import styles
import { InputSearchContainer, StyledSearchIcon } from "./SearchBar.styled";

/**
 * SearchBar component allows the user to search for a specific task by entering a search term.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.handleInputChange - Function that handles input change on the search bar.
 * @param {string} props.searchTerm - The search term entered by the user.
 *
 * @returns {React.Component} - A React component that renders a search bar.
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
