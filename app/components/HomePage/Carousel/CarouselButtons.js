import React from "react";
import styled from "styled-components";

const buttons = [0, 1, 2, 3, 4, 5];

const CarouselButtons = props => {
  // set the state with the button's index/value when its clicked
  const handeClick = e => {
    props.setIndex(e.target.value);
  };

  const buttons_list = buttons.map(item => {
    return (
      <Button
        // change the button's color when clicked
        clicked={item === props.index ? true : false}
        key={item}
        value={item}
        onClick={handeClick}
      ></Button>
    );
  });

  return (
    <Wrapper>
      <ButtonContainer>{buttons_list}</ButtonContainer>
    </Wrapper>
  );
};

export default CarouselButtons;

const Wrapper = styled.div`
  position: relative;
  top: -30px;
  z-index: 2;
`;

const ButtonContainer = styled.ul`
  display: flex;
  justify-content: center;
`;

const Button = styled.li`
  margin: 0 4px;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${props => (props.clicked ? "white" : "grey")};

  &:hover {
    background-color: white;
  }
`;
