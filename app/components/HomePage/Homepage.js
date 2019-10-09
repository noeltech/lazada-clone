import React from "react";
import Header from "../Header/Header";
import styled from "styled-components";
import MenuNav from "./CategoryNav/MenuNav";
import Carousel from "./Carousel/Carousel";
import FlashSale from "./FlashSale/FlashSale";
import MostPopular from "./MostPopular/MostPopular";
import Collections from "./Collections/Collections";
import LazMallOverview from "./LazMall/LazMall";
import GlobalCollection from "./GlobalCollection/GlobalCollection";
import Categories from "./Catogries/Categories";
import JustForYou from "./JustForYou/JustForYou";
import Footer from "../Footer/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomeWrapper from "./HomeWrapper";

const Homepage = () => {
  return (
    <HomeWrapper>
      <Container>
        <MenuNav />
        <Carousel />
      </Container>
      <FlashSale />
      <MostPopular />
      <Collections />
      <LazMallOverview />
      <GlobalCollection />
      <Categories />
      <JustForYou />
    </HomeWrapper>
  );
};

export default Homepage;

const Container = styled.div`
  /* height: 300px; */
  width: 100%;

  display: flex;
  flex-direction: row;
`;
