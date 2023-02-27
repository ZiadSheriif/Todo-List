import React, { useEffect } from "react";

// Import themes
import darkTheme from "Theme/darkTheme";
import defaultTheme from "Theme/defaultTheme";
import lightTheme from "Theme/lightTheme";

// Import Local Storage
import useLocalStorage from "Hooks/useLocalStorage";

// Import theme provider from styled components
import { ThemeProvider } from "styled-components";

// Import Pages
import HomePage from "Pages/HomePage/HomePage";

function App() {
  // State to store the current theme of the website
  const [theme, setTheme] = useLocalStorage(
    "theme",
    JSON.stringify({
      ...defaultTheme,
      ...lightTheme,
    })
  );
  /**
   * Function to toggle the theme of the website
   * It will change the theme from light to dark and vice versa
   */
  const handleToggleTheme = () => {
    if (JSON.parse(theme).id === "dark") {
      setTheme(
        JSON.stringify({
          ...defaultTheme,
          ...lightTheme,
        })
      );
    } else {
      setTheme(
        JSON.stringify({
          ...defaultTheme,
          ...darkTheme,
        })
      );
    }
  };
  useEffect(() => {
    document.title = "TO DO ";
  }, []);
  return (
    <ThemeProvider theme={JSON.parse(theme)}>
      <HomePage handleToggleTheme={handleToggleTheme} />
    </ThemeProvider>
  );
}

export default App;
