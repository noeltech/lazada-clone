import React from "react";
import styled from "styled-components";
import Card from "../../native/Card";
import ProductOverview from "../../native/ProductOverview";

const lazmall_items = [
  "LazmallItem 1",
  "LazmallItem 2",
  "LazmallItem 3",
  "LazmallItem 4",
  "LazmallItem 5",
  "LazmallItem 6"
];

const LazMallOverview = () => {
  const products = lazmall_items.map(item => {
    return (
      <ItemCard key={item}>
        <ItemLink href="/">{item}</ItemLink>
      </ItemCard>
    );
  });

  return (
    <React.Fragment>
      <ProductOverview
        title={"LazMall"}
        linkToPage="/lazmallpage"
        products={<Container>{products}</Container>}
      />
    </React.Fragment>
  );
};

export default LazMallOverview;

const ItemCard = styled(Card)`
  height: 200px;
  margin-left: 0.6rem;
  margin-top: 3px;
  flex: 1 1 150px;
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

  justify-content: space-evenly;
`;
