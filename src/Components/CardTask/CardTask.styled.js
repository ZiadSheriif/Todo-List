import styled from "styled-components";
import Card from "react-bootstrap/Card";

export const CardContainer = styled(Card)`
  background-color: ${({ theme }) => theme.canvas};
  .card-title {
    color: #fff;
  }
  .card-subtitle {
    color: #f0fff0;
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
  background-color: red;
  letter-spacing: unset;
  line-height: 17px;
  min-height: 32px;
  min-width: 32px;
  padding: 10px;
  margin-left: 16px;
  position: relative;
  align-items: center;
  border-radius: 9999px;
  box-sizing: border-box;
  display: flex;
  margin: 10px;
  justify-content: center;
  text-align: center;
  width: 40%;
`;
