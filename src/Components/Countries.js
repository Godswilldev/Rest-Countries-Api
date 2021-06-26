import React, { useContext, useEffect } from "react";
import uuid from "uuid/v4";
import axios from "axios";
import { CountriesContext } from "../Context/CountriesContext";
import styled from "styled-components";
import CountriesCard from "./CountriesCard";
import { device } from "../MediaQueries";
import Loader from "../images/Blocks-1s-200px.svg";

const Country = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 5rem;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  @media ${device.mobileL} {
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  }
`;

const Countries = () => {
  const { countries, loading, search, dispatch } = useContext(CountriesContext);

  useEffect(() => {
    (async function getAllCountries() {
      dispatch({ type: "SENDING REQUEST" });
      const { data } = await axios.get("https://restcountries.eu/rest/v2/all");
      dispatch({ type: "SET COUNTRIES", payload: data });
      dispatch({ type: "REQUEST FINISHED" });
    })();
  }, [dispatch]);

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(search.toLowerCase()) ||
      country.capital.toLowerCase().includes(search.toLowerCase()) ||
      country.region.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {loading ? (
        <div>
          <img src={Loader} alt="Loader" />
        </div>
      ) : (
        <Country>
          {filteredCountries.map((country) => (
            <CountriesCard key={uuid()} {...country} />
          ))}
        </Country>
      )}
    </div>
  );
};

export default Countries;
