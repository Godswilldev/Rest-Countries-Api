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
  height: 35rem;
  display: grid;
  grid-template-rows: 55% 1fr;
`;

const CardImg = styled.div`
  background-image: url(${({ flag }) => flag});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Span = styled.span`
  font-weight: 300;
`;

const Details = styled.div`
  margin-left: 3rem;
  margin-top: 2rem;
  h2 {
    margin-bottom: 1rem;
  }
`;

const Name = styled.h1`
  margin-bottom: 1.5rem;
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
