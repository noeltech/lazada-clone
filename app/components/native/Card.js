import React from "react";
import styled from "styled-components";

const HoverCard = props => {
  return <Card className={props.className}>{props.children}</Card>;
};

export default HoverCard;

const Card = styled.div`
  border-radius: 5px;

  flex: 1 1 200px;
  color: grey;
  background-color: #f2f2f2;
  text-align: center;
  padding: 1px;

  &:hover {
    box-shadow: 4px 4px 6px 4px rgba(0, 0, 0, 0.25);
    transform: all 0.3s ease-in-out;
    position: relative;
  }
`;
