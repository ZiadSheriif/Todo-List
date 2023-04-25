import styled from "styled-components";
import Modal from "react-bootstrap/Modal";
import { ModalFooter } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import DatePicker from "react-date-picker";
import Dropdown from "react-bootstrap/Dropdown";

export const DateStyled = styled(DatePicker)`
  width: 100%;
  height: 40px;
  border: 1px solid #86b7fe;
  :focus {
    border: none !important;
  }
  :hover {
    border: 2px solid ${({ theme }) => theme.canvas} !important;
  }
`;

export const ModalContainer = styled(Modal)`
  .modal-header {
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    padding: 16px;

    .modal-title {
      font-size: 20px;
      font-weight: 600;
      line-height: 20px;
    }

    .btn-close:focus {
      box-shadow: none !important;
    }
  }

  .modal-body {
    .form-control {
      border-color: none !important;
      :focus {
        box-shadow: none;
      }
      :hover {
        border: 2px solid ${({ theme }) => theme.canvas} !important;
      }
    }
  }
`;
export const FormCheck = styled.div`
  display: block;
  margin-bottom: 16px;

  p {
    font-family: Noto Sans, Arial, sans-serif;
    font-size: 15px;
    font-weight: 400;
    line-height: 18px;
    padding-top: 8px;
  }
`;
export const FormLabel = styled.div`
  display: flex;
  margin-bottom: 16px;

  .form-check-input {
    width: 1em;
    height: 1em;

    :checked {
      background-color: #0079d3;
    }

    :focus {
      box-shadow: none;
    }
  }
`;
export const Label = styled.p`
  font-family: Noto Sans, Arial, sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  padding-top: 8px;
`;

export const Footer = styled(ModalFooter)`
  display: flex;
`;

export const AddTaskBtn = styled(Button)`
  margin: auto;
  position: relative;
  font-family: Noto Sans, Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  align-items: center;
  align-self: center;
  width: 80%;
  height: 40px;
  background-color: ${({ theme }) => theme.canvas};
  border: none;
  :hover {
    background-color: ${({ theme }) => theme.background.hover};
  }
`;

export const ProgressCheck = styled.label`
  align-items: center;
  display: flex;

  .form-check-input {
    width: 1.3em;
    height: 1.3em;
    fill: #878a8c;

    :focus {
      box-shadow: none;
    }

    :checked {
      background-color: ${({ theme }) => theme.canvas};
      border: none;
    }
  }
`;
export const TaskStatus = styled.span`
  font-size: 15px;
  line-height: 17px;
  display: inline-block;
  font-weight: 500;
  border-radius: 2px;
  padding: 0 4px;
  color: ${({ theme }) => theme.color.primary} !important;
  margin: 0 4px 0 8px;
`;
export const CheckBoxInput = styled.input`
  width: 1.5em;
  height: 1.1em;
  fill: #878a8c;

  :focus {
    box-shadow: none;
  }

  :checked {
    background-color: ${({ theme }) => theme.canvas};
    border: none;
  }
`;
export const DropdownContainer = styled(Dropdown)`
  margin: 20px 0;
  .dropdown-toggle {
    width: 100% !important;
    background-color: white !important;
    color: ${({ theme }) => theme.color.primary} !important;
    text-align: start;
    ::after {
      align-items: end !important;
    }
  }
`;

export const AlertTitle = styled.p`
  color: red;
  font-weight: 300;
  padding: 3px;
`;
