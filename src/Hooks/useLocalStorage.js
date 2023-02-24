import { useState } from "react";

/**
 * Custom hook used to manage local storage using states
 *
 * @param {string} keyName The key of local storage
 * @param {string} defaultValue The default value for the local storage
 * @returns {React.Component}
 */
const useLocalStorage = (keyName, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(keyName);
      if (value) {
        return value;
      } else {
        window.localStorage.setItem(keyName, defaultValue);
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });
  const setValue = (newValue) => {
    try {
      window.localStorage.setItem(keyName, newValue);
    } catch (err) {}
    setStoredValue(newValue);
  };
  return [storedValue, setValue];
};

export default useLocalStorage;
