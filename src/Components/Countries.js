import React, { useContext, useEffect } from "react";
import uuid from "uuid/v4";
import { CountriesContext } from "../Context/CountriesContext";
import styled from "styled-components";
import CountriesCard from "./CountriesCard";

const Country = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  grid-gap: 5rem;
  grid-column-gap: 2rem;
  grid-row-gap: 10rem;
  justify-content: center;
  align-items: center;
`;
const Countries = () => {
  const { countries, loading, getAllCountries } = useContext(CountriesContext);

  useEffect(() => {
    getAllCountries();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <Country>
          {countries.map((country) => (
            <CountriesCard key={uuid()} {...country} />
          ))}
        </Country>
      )}
    </div>
  );
};

export default Countries;
