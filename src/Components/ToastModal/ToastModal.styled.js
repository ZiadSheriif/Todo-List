import styled from "styled-components";
import Toast from "react-bootstrap/Toast";

export const ToastContainer = styled(Toast)`
  position: absolute;
  .toast-header .btn-close {
    :focus {
      box-shadow: none !important;
    }
  }
`;
