import React from "react";
import styled from "styled-components";

const CarouselItem = props => {
  return (
    <Wrapper>
      <LinkWrapper>
        <Image bg={props.bg}>{props.image}</Image>
      </LinkWrapper>
    </Wrapper>
  );
};

export default CarouselItem;

const Wrapper = styled.li`
  width: 100%;
  height: 100%;
`;
const LinkWrapper = styled.a`
  width: 100%;
  height: 100%;
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.bg};
  /* ${props => (props.bg ? props.bg : "")}; */
  text-align: center;
  color: black;
  line-height: 300px;
  font-size: 2rem;
`;
