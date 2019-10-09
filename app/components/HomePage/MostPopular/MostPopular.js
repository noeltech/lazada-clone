import React from "react";
import styled from "styled-components";
import PopularList from "./PopularList";

const MostPopular = () => {
  return (
    <Wrapper outlined>
      <Header>
        <Title> Most Popular</Title>
      </Header>
      <PopularList />
    </Wrapper>
  );
};

export default MostPopular;

const Wrapper = styled.article`
  outline: ${props => (props.outlined ? "solid 1px #f2f2f2" : "")};
  height: 250px;
  width: 100%;
  margin-top: 40px;
`;

const Title = styled.h3``;

const Header = styled.header``;
