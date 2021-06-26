import styled from "styled-components";
import { device } from "../MediaQueries";

export const Card = styled.div`
  background-color: ${({ theme }) => theme.elements};
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0.3rem 0.3rem 0.3rem rgba(0, 0, 0, 0.3);
  cursor: pointer;
  height: 37rem;
  display: grid;
  grid-template-rows: 55% 1fr;
  width: 27rem;
  @media ${device.mobileL} {
    width: unset;
  }
`;

export const CardImg = styled.div`
  background-image: url(${({ flag }) => flag});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Span = styled.span`
  font-weight: 500;
`;

export const Details = styled.div`
  margin-left: 3rem;
  margin-top: 1rem;
  h2 {
    margin-bottom: 1rem;
  }
`;

export const Name = styled.h1`
  margin-bottom: 1.5rem;
`;
