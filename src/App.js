import React, { useContext } from "react";
import { GlobalStyles } from "./GlobalStyles";
import { ThemeContext } from "./Context/ThemeContext";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { CountriesProvider } from "./Context/CountriesContext";
const App = () => {
  const { mode } = useContext(ThemeContext);
  return (
    <>
      <GlobalStyles theme={mode} />
      <Navbar />
      <CountriesProvider>
        <Home />
      </CountriesProvider>
    </>
  );
};

export default App;
