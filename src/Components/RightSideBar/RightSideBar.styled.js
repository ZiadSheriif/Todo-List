// Imports
import styled from "styled-components";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// styles of offcanvas container
export const OffcanvasContainer = styled(Offcanvas)`
  position: fixed;
  width: 250px !important;
  flex-direction: column !important;
  z-index: 100;

  background-color: ${({ theme }) => theme.background.primary} !important;

  // styles of offcanvas body
  .offcanvas-body {
    //  styles of items inside offcanvas body
    .dropdown-item {
      color: ${({ theme }) => theme.color.primary} !important;
      margin: 10px 0;
      :hover {
        color: ${({ theme }) => theme.color.hover} !important;
      }
    }
  }
  hr {
    opacity: 0.1;
  }
`;

// styles of header
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

// styles of add new tasks button
export const TaskBtn = styled(Button)`
  margin: 20px;
  background-color: ${({ theme }) => theme.canvas} !important;
  width: 80%;
  border: none;

  :hover {
    background-color: ${({ theme }) => theme.background.hover} !important;
  }
`;

export const IcoContainer = styled.span`
  img {
    border-radius: 9999px;
  }
`;
export const DeleteBtn = styled.span`
  color: ${({ theme }) => theme.color.primary};
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.color.hover};
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FormSwitcher = styled(Form)`
  display: flex;
  flex-direction: row;
  .form-switch .form-check-input {
    margin-left: 0 !important;
    display: flex !important;
    flex: 1 0 !important;
    position: relative;
    color: ${({ theme }) => theme.canvas};
    cursor: pointer;
  }
`;
export const ButtonContainer = styled(Button)`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: inherit;
  border: none;
  margin: 10px;
  span {
    color: ${({ theme }) => theme.color.primary};
  }
  :hover,
  :focus-visible {
    background-color: ${({ theme }) => theme.background.primary};
    box-shadow: none;
  }
`;
