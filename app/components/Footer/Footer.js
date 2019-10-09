import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container outlined>
      <TempLabel>Footer</TempLabel>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  width: 100%;
  height: 500px;

  outline: ${props => (props.outlined ? "solid 1px #f2f2f2" : "")};

  display: flex;
  align-items: center;
  justify-content: center;
`;

const TempLabel = styled.p`
  font-size: 5rem;
  color: grey;
`;
