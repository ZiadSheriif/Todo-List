import styled from "styled-components";
import Button from "react-bootstrap/Button";

export const ConfirmBtn = styled(Button)`
  background-color: ${({ theme }) => theme.canvas};
  border: none !important;
  :hover,
  :focus-visible,
  :focus {
    background-color: ${({ theme }) => theme.canvas};
    border: none !important;
    box-shadow: none !important;
  }
`;
