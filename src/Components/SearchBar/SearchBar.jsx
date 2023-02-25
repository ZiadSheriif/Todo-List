import React from "react";
import Form from "react-bootstrap/Form";
import { InputSearchContainer, StyledSearchIcon } from "./SearchBar.styled";

/**
 * Component that allows user to search on a specific task
 * @returns {React.Component}
 */
const SearchBar = () => {
  return (
    <InputSearchContainer>
      <StyledSearchIcon size={22} />
      <Form.Control type="text" placeholder="Search on Task" />
    </InputSearchContainer>
  );
};

export default SearchBar;
