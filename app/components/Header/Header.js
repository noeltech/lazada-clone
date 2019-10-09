import React from "react";
import styled from "styled-components";

import HeaderMenu from "./HeaderMenu";
import BrandLogo from "./BrandLogo";
import SearchBar from "./SearchBar";
import CartLink from "./CartLink";
import useWindowScroll from "./useWindowScroll";

const Header = props => {
  const isScrolled = useWindowScroll();

  // logging the state
  console.log(isScrolled);
  // const stick = isScrolled;
  return (
    <Wrapper>
      <StickyWrapper stick={isScrolled}>
        <HeaderMenu />
        <SubContainer>
          <BrandLogo title="Brand/Logo" />
          <SearchBar />
          <CartLink />
        </SubContainer>
      </StickyWrapper>
    </Wrapper>
  );
};

export default Header;

// styles
const Wrapper = styled.div`
  width: 1118px;
  transition: transform 0.4s ease-out;
  margin: 0 auto;
`;

const StickyWrapper = styled.header`
  width: 1118px;
  transition: transform 0.4s ease-out;
  margin: 0 auto;
  box-shadow: 0px 1px 3px -3px rgba(79, 79, 79, 1);
  ${props =>
    props.stick
      ? "position:fixed;top: -50px; transform: translate(0,50px); z-index:10"
      : ""};
`;

const SubContainer = styled.div`
  height: 90px;
  display: flex;
  align-items: center;
  background-color: white;
`;
