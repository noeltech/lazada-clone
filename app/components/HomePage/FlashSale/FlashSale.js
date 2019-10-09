import React from "react";
import styled from "styled-components";
import ProductList from "./ProductList";
import { Link } from "react-router-dom";

const FlashSale = () => {
  return (
    <Wrapper outlined>
      {console.log("render")}
      <Header>
        <Title> Flash Sale</Title>
      </Header>
      <Container>
        <p>On Sale Now</p>
        <p>Countdown Widget Here</p>
        <Link to="/onsale">
          <LinkText>Show All Products</LinkText>
        </Link>
      </Container>
      <ProductList />
    </Wrapper>
  );
};

export default FlashSale;

const Wrapper = styled.article`
  outline: ${props => (props.outlined ? "solid 1px #f2f2f2" : "")};
  margin-top: 40px;
  width: 100%;
`;
const LinkText = styled.span`
  color: #f57224;
`;

const Title = styled.h3``;

const Header = styled.header``;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: ${props => (props.column ? "column" : "row")};
  & * {
    margin-left: 10px;
  }
  padding: 12px;
`;
