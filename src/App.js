import React, { useContext } from "react";
import { GlobalStyles } from "./GlobalStyles";
import { ThemeContext } from "./Context/ThemeContext";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { CountriesProvider } from "./Context/CountriesContext";
import { Route, Switch, withRouter } from "react-router-dom";
import CountryDetails from "./Components/CountryDetails";
const App = () => {
  const { mode } = useContext(ThemeContext);
  return (
    <>
      <GlobalStyles theme={mode} />
      <Navbar />
      <CountriesProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/country/:col" component={CountryDetails} />
        </Switch>
      </CountriesProvider>
    </>
  );
};

export default withRouter(App);
