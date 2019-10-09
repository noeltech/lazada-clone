import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductCard from "../../native/ProductCard";
import getOnSaleProducts from "./getOnSaleProducts";

const ProductList = () => {
  const onSaleProducts = getOnSaleProducts();

  const product_list = onSaleProducts.map(item => {
    return (
      <ProductCard
        key={item.id}
        name={item.productname}
        imageSrc={item.image}
        price={item.price}
        discount={item.price}
      />
    );
  });

  return <Container>{product_list}</Container>;
};

export default ProductList;

const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
