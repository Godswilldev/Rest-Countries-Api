import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CountriesContext } from "../Context/CountriesContext";
const CountryDetails = (props) => {
  const { col } = useParams();

  const { currentCountry, getOneCountry } = useContext(CountriesContext);

  useEffect(() => {
    getOneCountry(col.toLowerCase());
  });

  return (
    <div>
      <h1>Country Details {col} </h1>
      {currentCountry ? (
        <div>{currentCountry.name}</div>
      ) : (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
