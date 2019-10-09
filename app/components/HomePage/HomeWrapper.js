import React from "react";
import styled from "styled-components";
import useWindowScroll from "../Header/useWindowScroll";

const HomeWrapper = props => {
  const isScrolled = useWindowScroll();
  return <Wrapper PaddingTop={isScrolled}>{props.children}</Wrapper>;
};

export default HomeWrapper;

const Wrapper = styled.div`
  /* height: 100%; */
  width: 1118px;
  margin: 0 auto;
  ${props => (props.PaddingTop ? "padding-top:117px;" : "")}
`;
