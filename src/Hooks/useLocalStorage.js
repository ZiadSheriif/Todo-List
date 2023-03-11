import { useState } from "react";

/**
 * Custom hook used to manage local storage using states
 *
 * @param {string} keyName The key of local storage
 * @param {string} defaultValue The default value for the local storage
 * @returns {Array} An array containing the stored value and a function to set the value
 */
const useLocalStorage = (keyName, defaultValue) => {
  // Create a state variable called storedValue and set its initial value
  // by retrieving the value from local storage using the keyName parameter
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

  // Create a function called setValue that updates the value in local storage
  // and also updates the storedValue state variable
  const setValue = (newValue) => {
    try {
      window.localStorage.setItem(keyName, newValue);
    } catch (err) {}
    setStoredValue(newValue);
  };

  // Return an array containing the storedValue and setValue functions
  return [storedValue, setValue];
};

export default useLocalStorage;
