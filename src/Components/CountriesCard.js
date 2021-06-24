import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../Context/ThemeContext";
import { Link } from "react-router-dom";

const Card = styled.div`
  background-color: ${({ theme }) => theme.elements};
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0.3rem 0.3rem 0.3rem rgba(0, 0, 0, 0.3);
  cursor: pointer;
  width: 35rem;
  height: 40rem;
  display: grid;
  grid-template-rows: 55% 1fr;
`;

const CardImg = styled.div`
  background-image: url(${({ flag }) => flag});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

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
        <div>
          <h1>{name}</h1>
          <h2>{population}</h2>
          <h2>{region}</h2>
          <h2>{capital}</h2>
        </div>
      </Card>
    </Link>
  );
};

export default CountriesCard;
