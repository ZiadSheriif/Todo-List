import React from "react";
import Toast from "react-bootstrap/Toast";

import { ToastContainer } from "./ToastModal.styled";

/**
 * A component that displays a toast message.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.showToast - Whether to show the toast message.
 * @param {function} props.setShowToast - A function to set the `showToast` state.
 * @returns {React.Component} - The rendered component.
 */
const ToastModal = ({ showToast, setShowToast, TasksCount }) => {
  /**
   * Closes the toast message.
   */
  const handleCloseToast = () => {
    setShowToast(false);
  };

  return (
    <div>
      <ToastContainer show={showToast} onClose={handleCloseToast}>
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
