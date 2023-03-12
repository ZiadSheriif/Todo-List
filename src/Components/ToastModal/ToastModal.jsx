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
const ToastModal = ({ showToast, setShowToast }) => {
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
          <strong className="me-auto">Algorithms</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Nothing to show here</Toast.Body>
      </ToastContainer>
    </div>
  );
};

export default ToastModal;
