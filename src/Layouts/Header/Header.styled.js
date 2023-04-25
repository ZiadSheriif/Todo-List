import styled from "styled-components";
import Button from "react-bootstrap/Button";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
  }
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

  @media (min-width: 768px) {
    width: auto;
    margin-right: 20px;
  }
`;
export const DateContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.primary};

  @media (min-width: 768px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media (max-width: 768px) {
    display: none;
  }
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

  @media (min-width: 768px) {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }
`;
export const NotificationIcon = styled.span`
  position: relative;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NotificationBadge = styled.div`
  background-color: red;
  color: white;
  font-size: 10px;
  font-weight: bold;
  padding: 2px;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  right: 2px;
`;
