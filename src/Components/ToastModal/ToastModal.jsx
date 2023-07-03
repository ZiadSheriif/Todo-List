import React, { useContext } from "react";
import Toast from "react-bootstrap/Toast";
import AuthContext from "Contexts/Toast-Context";

import { ToastContainer } from "./ToastModal.styled";

/**
 * A component that displays a toast message.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.showToast - Whether to show the toast message.
 * @param {function} props.setShowToast - A function to set the `showToast` state.
 * @returns {React.Component} - The rendered component.
 */
const ToastModal = ({ TasksCount }) => {
  const ctx = useContext(AuthContext);
  return (
    <div>
      <ToastContainer show={ctx.isShown} onClose={ctx.closeToast}>
        <Toast.Header>
          <strong className="me-auto text-info">Alerts</strong>
          <small>today</small>
        </Toast.Header>
        <Toast.Body>
          You have <strong>{TasksCount} un-completed</strong> tasks today
        </Toast.Body>
      </ToastContainer>
    </div>
  );
};

export default ToastModal;
