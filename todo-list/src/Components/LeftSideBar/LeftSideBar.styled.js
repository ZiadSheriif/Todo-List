import styled from "styled-components";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

export const OffcanvasContainer = styled(Offcanvas)`
  width: 250px !important;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background.primary} !important;

  .offcanvas-body {
    .dropdown-item {
      color: ${({ theme }) => theme.color.primary} !important;
    }
  }
`;

export const Header = styled(Offcanvas.Header)`
  flex-direction: column;

  // styles of titles
  .offcanvas-title {
    margin-top: 20px;
    align-self: center;
    text-transform: uppercase;
    font-family: cursive;
    color: ${({ theme }) => theme.color.primary};
  }
`;

// styles of button
export const TaskBtn = styled(Button)`
  margin: 20px;
  background-color: ${({ theme }) => theme.canvas} !important;
  width: 100%;
  :hover {
    background-color: ${({ theme }) => theme.background.hover} !important;
  }
`;
