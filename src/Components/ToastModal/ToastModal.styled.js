import styled from "styled-components";
import Toast from "react-bootstrap/Toast";

export const ToastContainer = styled(Toast)`
  position: absolute;
  padding: 0 20px 0 0;
  .toast-header .btn-close {
    :focus {
      box-shadow: none !important;
    }
  }
`;
