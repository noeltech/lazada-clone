import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProductOverview = props => {
  return (
    <Wrapper outlined>
      <Header>
        <Title> {props.title}</Title>
        {props.linkToPage && (
          <Link to={props.linkToPage}>
            <LinkText>Shop More > </LinkText>
          </Link>
        )}
      </Header>
      {props.products}
    </Wrapper>
  );
};

export default ProductOverview;

const Wrapper = styled.article`
  margin-top: 2rem;
  outline: ${props => (props.outlined ? "solid 1px #f2f2f2" : "")};

  width: 100%;
`;
const LinkText = styled.span`
  color: #1a9cb7;
`;

const Title = styled.h3``;

const Header = styled.header`
  padding: 6px 3px;
  display: flex;
  justify-content: space-between;
`;
