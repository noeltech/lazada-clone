import React from "react";
import styled from "styled-components";

const ProductList = props => {
  return <Container>{props.products}</Container>;
};

export default ProductList;

const ItemCard = styled(Card)`
  height: 200px;
  margin-left: 3px;
`;
const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
