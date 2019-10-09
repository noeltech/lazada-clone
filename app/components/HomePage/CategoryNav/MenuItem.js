import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useHover from "./useHover";
import { Link } from "react-router-dom";

const MenuItem = props => {
  return (
    <Container
      isActive={props.isActive}
      onMouseEnter={props.onMouseEnter}
      // onMouseLeave={props.onMouseLeave}
      data-value={props.item}
    >
      <Link to={`/${props.item}`}>
        <LinkText>{props.item}</LinkText>
      </Link>
    </Container>
  );
};

export default React.memo(MenuItem);

const LinkItem = styled.a`
  font-size: 14px;
`;
const LinkText = styled.span`
  padding-left: 10px;
`;
const Container = styled.li`
  padding: 4px;
  width: 100%;
  background-color: ${props => props.isActive === true && "grey"};
`;
