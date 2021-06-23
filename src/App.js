import React, { useContext } from "react";
import { light, dark } from "./Theme";
import { GlobalStyles } from "./GlobalStyles";
import { ThemeContext } from "./Context/ThemeContext";
const App = () => {
  const { theme } = useContext(ThemeContext);
  const mode = theme === "light" ? light : dark;
  return (
    <>
      <GlobalStyles theme={mode} />
      <h1>App</h1>
    </>
  );
};

export default App;
