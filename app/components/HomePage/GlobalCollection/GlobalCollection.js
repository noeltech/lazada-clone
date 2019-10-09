import React from "react";
import styled from "styled-components";
import Card from "../../native/Card";
import ProductOverview from "../../native/ProductOverview";
import TrendingProducts from "./TrendingProducts";
const collection = [
  "LazmallItem 1",
  "LazmallItem 2",
  "LazmallItem 3",
  "LazmallItem 4"
];

const GlobalCollection = () => {
  const products = collection.map(item => {
    return (
      <ItemCard key={item}>
        <ItemLink href="/">{item}</ItemLink>
      </ItemCard>
    );
  });

  const product_list = (
    <React.Fragment>
      <Container>
        <SingleCollection>{collection[0]}</SingleCollection>
        <SubContainer>{products}</SubContainer>
        <TrendingProducts />
      </Container>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ProductOverview title={"Global Collection"} products={product_list} />
    </React.Fragment>
  );
};

export default GlobalCollection;

const ItemCard = styled(Card)`
  margin-left: 0.1rem;
  margin-top: 3px;
  flex: 1 1 200px;
`;

const SingleCollection = styled(Card)`
  margin-left: 0.1rem;
  margin-top: 3px;
  flex: 1 1 100px;
`;
const ItemLink = styled.a`
  width: 100%;
  height: 100%;
  display: block;
  color: grey;
`;

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  height: 180px;
  align-items: stretch;
`;

const SubContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 2 1 300px;

  justify-content: space-evenly;
`;
