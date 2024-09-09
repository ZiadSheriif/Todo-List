import styled from "styled-components";
import Card from "react-bootstrap/Card";

export const CardContainer = styled(Card)`
  background-color: ${({ theme }) => theme.canvas};
  width: ${({ viewTask }) => (viewTask === true ? "18rem" : "100%")};
  position: relative;

  .card-title {
    color: #fff;
  }
  .card-subtitle {
    color: rgb(196, 181, 253) !important;
    margin-bottom: 25px !important;
  }
  .card-body {
    height: 100%;
    position: relative;
  }
  hr {
    opacity: 0.2;
    margin: 1px;
  }
`;

export const Line = styled.div`
  margin: 5px 0;
  height: 1px;
  background: repeating-linear-gradient(
    to right,
    transparent,
    transparent 10px,
    #f0fff0 10px,
    #f0fff0 20px
  );
`;

export const StatusBtn = styled.button`
  font-family: Noto Sans, Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  border: none;
  background-color: ${({ colorState }) =>
    colorState === "uncompleted" ? "#fde68a" : "#a7f3d0"};
  letter-spacing: unset;
  line-height: 15px;
  min-height: 30px;
  min-width: 32px;
  padding: 10px;
  position: relative;
  border-radius: 9999px;
  box-sizing: border-box;
  display: flex;
  margin: 10px;
  justify-content: center;
  align-items: start;
  width: 40%;
`;
export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: ${({ viewTask }) =>
    viewTask === true ? "space-around" : "space-between"};
  align-items: center;
`;
export const Settings = styled.div`
  display: flex;
  justify-content: space-around;
  margin-right: ${({ viewTask }) => (viewTask === true ? "none" : "20px")};
  svg {
    color: white;
    cursor: pointer;
  }
  right: 0;
`;
export const IconContainer = styled.span`
  :hover {
    background-color: ${({ theme }) => theme.background.iconHoverColor};
  }
`;

export const DateContainer = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  gap: 15px;
  bottom: 5px;
  position: absolute;
  left: 0;
  right: 0;
  color: white;
`;
