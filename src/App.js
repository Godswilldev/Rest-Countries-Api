import React, { useContext } from "react";
import { GlobalStyles } from "./GlobalStyles";
import { ThemeContext } from "./Context/ThemeContext";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { CountriesProvider } from "./Context/CountriesContext";
import {
  Route,
  Switch,
  withRouter,
  Redirect,
  useLocation,
} from "react-router-dom";
import CountryDetails from "./Components/CountryDetails";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();
  const { mode } = useContext(ThemeContext);
  return (
    <div style={{ overflow: "hidden" }}>
      <GlobalStyles theme={mode} />
      <Navbar />
      <CountriesProvider>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/country/:alpha3Code"
              component={CountryDetails}
            />
            <Redirect to="/" />
          </Switch>
        </AnimatePresence>
      </CountriesProvider>
    </div>
  );
};

export default withRouter(App);
