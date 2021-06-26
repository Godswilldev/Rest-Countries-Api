import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { Link } from "react-router-dom";
import { Card, CardImg, Span, Details, Name } from "./CountriesCardStyles";

const CountriesCard = ({
  name,
  population,
  region,
  capital,
  flag,
  alpha3Code,
}) => {
  const { mode } = useContext(ThemeContext);

  return (
    <Link
      to={`country/${alpha3Code}`}
      style={{
        textDecoration: "none",
        color: mode.text,
      }}
    >
      <Card theme={mode}>
        <CardImg flag={flag}></CardImg>
        <Details>
          <Name>{name}</Name>
          <h2>
            Population:
            <Span> {population}</Span>
          </h2>
          <h2>
            Region:
            <Span> {region}</Span>
          </h2>
          <h2>
            Capital:
            <Span> {capital}</Span>
          </h2>
        </Details>
      </Card>
    </Link>
  );
};

export default CountriesCard;
