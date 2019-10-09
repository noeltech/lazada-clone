import React from "react";
import styled from "styled-components";
import Card from "./Card";

const ProductOverview = props => {
  return (
    <CardContainer>
      <CardLink href="/">
        <ProductImage src={props.imageSrc} alt={props.name} />
        <ProductName>{props.name}</ProductName>
        <ProductPrice>
          {/* Peso Symbol */}
          <span>&#8369;</span>
          {props.price}
        </ProductPrice>
        <PriceDiscount>
          <span>&#8369;</span>
          {props.discount}
        </PriceDiscount>
      </CardLink>
    </CardContainer>
  );
};

export default ProductOverview;

const CardContainer = styled(Card)`
  margin-left: 5px;
`;

const CardLink = styled.a`
  width: 100%;
  height: 100%;
  display: block;
  /* color: grey; */

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 190px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
const ProductName = styled.h5``;
const ProductPrice = styled.p`
  color: #f57224;
`;

const PriceDiscount = styled.p``;
