import React from "react";
import styled from "styled-components";
import Card from "../../native/Card";
import ProductOverview from "../../native/ProductOverview";

const categories = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8",
  "Item 9",
  "Item 10",
  "Item 11",
  "Item 12",
  "Item 13",
  "Item 14",
  "Item 15",
  "Item 16",
  "Item 17",
  "Item 18"
];

const JustForYou = () => {
  const category_list = categories.map(item => {
    return (
      <ItemCard key={item}>
        <ItemLink href="/">{item}</ItemLink>
      </ItemCard>
    );
  });

  return (
    <React.Fragment>
      {console.log("justforyou")}
      <ProductOverview
        title={"Just For You"}
        products={<Container>{category_list}</Container>}
      />
    </React.Fragment>
  );
};

export default JustForYou;

const ItemCard = styled(Card)`
  margin-left: 0.6rem;
  margin-top: 0.6rem;
  flex: 1 1 160px;
  height: 230px;
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
