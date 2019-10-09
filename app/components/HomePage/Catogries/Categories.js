import React from "react";
import styled from "styled-components";
import Card from "../../native/Card";
import ProductOverview from "../../native/ProductOverview";

const categories = [
  "Category 1",
  "Category 2",
  "Category 3",
  "Category 4",
  "Category 5",
  "Category 6",
  "Category 7",
  "Category 8",
  "Category 9",
  "Category 10",
  "Category 11",
  "Category 12",
  "Category 13",
  "Category 14",
  "Category 15",
  "Category 16"
];

const Categories = () => {
  const category_list = categories.map(item => {
    return (
      <ItemCard key={item}>
        <ItemLink href="/">{item}</ItemLink>
      </ItemCard>
    );
  });

  return (
    <React.Fragment>
      <ProductOverview
        title={"Categories"}
        products={<Container>{category_list}</Container>}
      />
    </React.Fragment>
  );
};

export default Categories;

const ItemCard = styled(Card)`
  margin-left: 0.1rem;
  margin-top: 3px;
  flex: 1 1 130px;
  height: 120px;
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
