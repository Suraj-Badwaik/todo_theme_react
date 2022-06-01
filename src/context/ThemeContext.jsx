import React from "react";
import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("Light");

  const toggleTheme = () => {
    if (theme === "Light") {
      setTheme("Dark");
    } else {
      setTheme("Light");
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isLight: theme === "Light",
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
