import React, { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { CountriesContext } from "../Context/CountriesContext";
import { ThemeContext } from "../Context/ThemeContext";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "./FramerMotionStyles";
import Loader from "../images/Blocks-1s-200px.svg";

import {
  Wrapper,
  WrapperDetails,
  Buttons,
  Flag,
  WrapperInfo,
  Border,
} from "./CountryDetailsStyles";

const CountryDetails = (props) => {
  const { alpha3Code } = useParams();

  const { currentCountry } = useContext(CountriesContext);

  const { theme } = useContext(ThemeContext);

  const { dispatch } = useContext(CountriesContext);
  useEffect(() => {
    (async function getOneCountry() {
      dispatch({ type: "SENDING REQUEST" });
      const { data } = await axios.get(
        `https://restcountries.com/v2/alpha/${alpha3Code}`
      );
      dispatch({ type: "SET ONE COUNTRY", payload: data });
      dispatch({ type: "REQUEST FINISHED" });
    })();
  }, [alpha3Code, dispatch]);

  return (
    <motion.div
      initial="initial"
      exit="out"
      animate="in"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Wrapper>
        <Buttons>
          <Button
            onClick={props.history.goBack}
            variant="contained"
            style={{
              color: theme === "light" ? "#111517" : "#ffffff",

              backgroundColor: theme === "light" ? "#fafafa" : "#2b3945",
            }}
          >
            Back
          </Button>
        </Buttons>
        {currentCountry ? (
          <WrapperDetails>
            <Flag
              src={currentCountry.flag}
              alt={`${currentCountry.name} flag`}
            />
            <div>
              <WrapperInfo>
                <div>
                  <h1>{currentCountry.name}</h1>
                  <h2>
                    Native Name: <span>{currentCountry.nativeName}</span>{" "}
                  </h2>
                  <h2>
                    Population: <span>{currentCountry.population}</span>{" "}
                  </h2>
                  <h2>
                    Region: <span>{currentCountry.region}</span>{" "}
                  </h2>
                  <h2>
                    Sub Region: <span>{currentCountry.subregion}</span>{" "}
                  </h2>
                  <h2>
                    Capital: <span>{currentCountry.capital}</span>{" "}
                  </h2>
                </div>

                <div>
                  <h2>
                    Top Level Domain:
                    {currentCountry.topLevelDomain.map((domain, index) => (
                      <span key={index}>{domain}</span>
                    ))}
                  </h2>
                  <h2>
                    Currencies:
                    {currentCountry.currencies.map((currency, index) => (
                      <span key={index}>
                        {currency.symbol} {currency.name}
                      </span>
                    ))}
                  </h2>
                  <h2>
                    Languages:
                    {currentCountry.languages.map((language, index) => (
                      <span key={index}> {language.name} </span>
                    ))}
                  </h2>
                </div>
              </WrapperInfo>

              <Border>
                <span>Border Countries: </span>
                {currentCountry.borders.length > 0 &&
                  currentCountry.borders.map((border, index) => (
                    <Link to={border.toLowerCase()} key={index}>
                      <Button
                        variant="contained"
                        style={{
                          color: theme === "light" ? "#111517" : "#ffffff",

                          backgroundColor:
                            theme === "light" ? "#fafafa" : "#2b3945",
                        }}
                      >
                        {border}
                      </Button>
                    </Link>
                  ))}
              </Border>
            </div>
          </WrapperDetails>
        ) : (
          <div>
            <img src={Loader} alt="Loader" />
          </div>
        )}
      </Wrapper>
    </motion.div>
  );
};

export default CountryDetails;
