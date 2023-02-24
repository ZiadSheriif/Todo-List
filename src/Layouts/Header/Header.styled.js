import styled from "styled-components";
import Button from "react-bootstrap/Button";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

// styles of add new tasks button
export const TaskBtn = styled(Button)`
  margin: 20px;
  background-color: ${({ theme }) => theme.canvas} !important;
  width: 100%;
  :hover {
    background-color: ${({ theme }) => theme.background.hover} !important;
  }
  border: none;
`;
