import React from "react";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Countries from "./Countries";
import styled from "styled-components";
import { device } from "../MediaQueries";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "./FramerMotionStyles";

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 7rem auto;
  overflow: hidden;
  @media ${device.mobileL} {
    margin: 4rem auto;
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  @media ${device.mobileL} {
    flex-direction: column;
  }
`;

const Home = () => {
  return (
    <motion.div
      initial="initial"
      exit="out"
      animate="in"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Wrapper>
        <Actions>
          <Search />
          <Dropdown />
        </Actions>
        <Countries />
      </Wrapper>
    </motion.div>
  );
};

export default Home;
