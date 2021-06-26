import React from "react";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Countries from "./Countries";
import styled from "styled-components";
import { device } from "../MediaQueries";

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 7rem auto;
  @media ${device.mobileL} {
    margin: 4rem auto;
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${device.mobileL} {
    flex-direction: column;
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <Actions>
        <Search />
        <Dropdown />
      </Actions>
      <Countries />
    </Wrapper>
  );
};

export default Home;
