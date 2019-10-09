import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CarouselItem from "./CarouselItem";
import CarouselButtons from "./CarouselButtons";
import useCarouselPlay from "./useCarouselPlay";

const courousel_list = [
  "Index 0",
  "Index 1",
  "Index 2",
  "Index 3",
  "Index 4",
  "Index 5"
];

const colors = [
  "#59656F",
  "#C5AFA4",
  "#E0C9BC",
  "#DBD9DB",
  "#ECF8F8",
  "#595F6C"
];

const Carousel = () => {
  const [CarouselIndex, setIndex] = useState(0);

  // loop the carousel using a useEffect hooks
  // useCarouselPlay(CarouselIndex, setIndex, 3000);

  // create a list of carousel item
  const carousel_items = courousel_list.map((item, index) => {
    return <CarouselItem key={item} image={item} bg={colors[index]} />;
  });

  return (
    <Wrapper>
      <ul style={{ height: "100%" }}>{carousel_items[CarouselIndex]}</ul>
      <CarouselButtons index={CarouselIndex} setIndex={setIndex} />
    </Wrapper>
  );
};

export default Carousel;

const Wrapper = styled.section`
  /* position: relative; */
  outline: solid #f2f2f2 1px;
  height: 100%;
  flex-grow: 4;
  width: 100%;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
`;
