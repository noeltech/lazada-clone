import React from "react";
import styled from "styled-components";
import Card from "../../native/Card";

const trending_products = [
  "Trending Item 1",
  "Trending Item 2",
  "Trending Item 3",
  "Trending Item 4"
];

const TrendingProducts = () => {
  const products = trending_products.map(item => {
    return (
      <ItemCard key={item}>
        <ItemLink href="/">{item}</ItemLink>
      </ItemCard>
    );
  });

  return (
    <Container>
      <Header>
        <Title>{"Trending Products"}</Title>
      </Header>
      <SubContainer>{products}</SubContainer>
    </Container>
  );
};

export default TrendingProducts;

const Container = styled.section`
  width: 100%;
  flex: 3 1 300px;
  display: flex;
  flex-direction: column;
`;

const ItemCard = styled(Card)`
  margin-left: 0.1rem;
  margin-top: 3px;
  flex: 1 1 80px;
`;

const ItemLink = styled.a`
  width: 100%;
  height: 100%;
  display: block;
  color: grey;
`;

const SubContainer = styled.section`
  width: 100%;
  flex: 1 1 150px;
  display: flex;
  align-items: stretch;
  justify-content: space-evenly;
  height: 100%;
`;

const Title = styled.h6``;

const Header = styled.header`
  padding: 6px 6px;
`;
