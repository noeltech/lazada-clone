import React from "react";
import styled from "styled-components";
import ProductOverview from "../../native/ProductOverview";
import Card from "../../native/Card";

const product_collections = [
  "Collections 1",
  "Collections 2",
  "Collections 3",
  "Collections 4",
  "Collections 5",
  "Collections 6",
  "Collections 7",
  "Collections 8"
];

const Collections = () => {
  const products = product_collections.map(item => {
    return (
      <ItemCard key={item}>
        <ItemLink href="/">{item}</ItemLink>
      </ItemCard>
    );
  });

  return (
    <React.Fragment>
      <ProductOverview
        title={"Collections"}
        linkToPage={"/collections"}
        products={<Container>{products}</Container>}
      />
    </React.Fragment>
  );
};

export default Collections;

const ItemCard = styled(Card)`
  height: 130px;
  margin-left: 3px;
  margin-top: 3px;
  flex: 1 1 250px;
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
`;
