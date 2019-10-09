import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BrandLogo = props => {
  return (
    <Link to="/">
      <Container>{props.title}</Container>
    </Link>
  );
};

export default BrandLogo;

const Container = styled.div`
  background-color: #f2f2f2;
  height: 30px;
  width: 100px;
`;
