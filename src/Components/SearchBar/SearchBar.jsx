import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { InputSearchContainer, StyledSearchIcon } from "./SearchBar.styled";

/**
 * Component that allows user to search on a specific task
 * @returns {React.Component}
 */
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(searchTerm); // replace with your desired search logic
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
