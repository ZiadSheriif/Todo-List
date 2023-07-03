import React, { useState } from "react";

const AuthContext = React.createContext({
  isShown: false,
  setShowToast: () => {},
  closeToast: () => {},
});

export const AuthContextProvider = (props) => {
  const [showToast, setShowToast] = useState(false);
  const hanlderToast = () => {
    setShowToast(!showToast);
  };
  const handleCloseToast = () => {
    setShowToast(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isShown: showToast,
        setShowToast: hanlderToast,
        closeToast: handleCloseToast,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
