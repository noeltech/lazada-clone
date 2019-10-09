import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
const CartLink = () => {
  return (
    <Wrapper>
      <FontAwesomeIcon icon={faShoppingCart} size="lg" />
    </Wrapper>
  );
};

export default CartLink;

const Wrapper = styled.div`
  margin-left: 20px;
`;
