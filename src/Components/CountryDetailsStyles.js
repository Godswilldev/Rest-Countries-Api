import styled from "styled-components";
import { device } from "../MediaQueries";

export const Wrapper = styled.div`
  width: 90%;
  margin: 7rem auto;
  overflow: hidden;
`;

export const WrapperDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.mobileL} {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const Buttons = styled.div`
  margin-bottom: 3rem;
`;

export const Flag = styled.img`
  width: 40%;
  height: 30rem;
`;

export const WrapperInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-weight: 500;
  }
  h2 {
    margin: 1rem 0;
  }
`;

export const Border = styled.div`
  margin-top: 3rem;
  span {
    font-size: 1.5rem;
    font-weight: 700;
    margin-right: 0.5rem;
  }
  Button {
    margin-right: 1rem;
    background-color: ${({ theme }) => theme.elements};
  }
  a {
    text-decoration: none;
  }
`;
