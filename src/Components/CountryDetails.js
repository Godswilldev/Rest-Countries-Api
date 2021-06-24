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
        <div>
          <h1>{currentCountry.name}</h1>
          <img src={currentCountry.flag} alt={`${currentCountry.name} flag`} />
          <h2>Native Name: {currentCountry.nativeName} </h2>
          <h2>Region: {currentCountry.region} </h2>
          <h2>Population: {currentCountry.population} </h2>
          <h2>Sub Region: {currentCountry.subregion} </h2>
          <h2>Capital: {currentCountry.capital} </h2>
          <h2>
            Top Level Domain:
            {currentCountry.topLevelDomain.map((domain, index) => (
              <picture key={index}>{domain}</picture>
            ))}
          </h2>
          <h2>
            Languages:
            {currentCountry.languages.map((language, index) => (
              <p key={index}>{language.name}</p>
            ))}
          </h2>
          <h2>
            Currencies:
            {currentCountry.currencies.map((currency, index) => (
              <p key={index}>
                {currency.symbol} {currency.name}
              </p>
            ))}
          </h2>
        </div>
      ) : (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
