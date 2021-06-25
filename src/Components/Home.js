import React from "react";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Countries from "./Countries";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 7rem auto;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
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
