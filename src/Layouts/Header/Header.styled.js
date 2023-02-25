import styled from "styled-components";
import Button from "react-bootstrap/Button";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

// styles of add new tasks button
export const TaskBtn = styled(Button)`
  margin: 20px;
  background-color: ${({ theme }) => theme.canvas} !important;
  width: 80%;
  right: 0;
  justify-content: flex-end;
  border: none;
  :hover {
    background-color: ${({ theme }) => theme.background.hover} !important;
  }
`;
export const DateContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
export const NotificationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  svg {
    color: ${({ theme }) => theme.canvas} !important;
    margin-left: 10px;
    cursor: pointer;
  }
`;
