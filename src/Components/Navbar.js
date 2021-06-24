import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import lightModeIcon from "../images/icon-sun.svg";
import darkModeIcon from "../images/icon-moon.svg";
import { Nav, Mode } from "./NavbarStyles";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { theme, toggleTheme, mode } = useContext(ThemeContext);
  return (
    <Nav theme={mode}>
      <Link to="/">
        <h1>Where in the World ?</h1>
      </Link>
      <Mode onClick={toggleTheme}>
        <img
          src={theme === "light" ? darkModeIcon : lightModeIcon}
          alt="icon"
        />
        <h2>{theme === "light" ? "Dark Mode" : "Light Mode"}</h2>
      </Mode>
    </Nav>
  );
};

export default Navbar;
