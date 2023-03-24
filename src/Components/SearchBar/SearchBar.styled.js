import styled from "styled-components";
import Form from "react-bootstrap/Form";
import { CiSearch } from "react-icons/ci";

export const InputSearchContainer = styled(Form)`
  margin: 20px;
  position: relative;
  display: inline-block;
  width: 40%;

  @media screen and (max-width: 768px) {
    width: 45%;
  }

  .form-control {
    :focus {
      box-shadow: none !important;
    }
    :hover {
      border-color: #c0c0fa;
    }
  }
`;

export const StyledSearchIcon = styled(CiSearch)`
  color: ${({ theme }) => theme.color.muted};
  position: absolute;
  right: 0;
  top: 0;
  margin: 7px;
`;
