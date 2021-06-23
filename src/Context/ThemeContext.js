import React, { createContext } from "react";
import useDarkMode from "../Hooks/useDarkMode";
import { light, dark } from "../Theme";

export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [theme, toggleTheme] = useDarkMode("dark");
  const mode = theme === "light" ? light : dark;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, mode }}>
      {children}
    </ThemeContext.Provider>
  );
};
