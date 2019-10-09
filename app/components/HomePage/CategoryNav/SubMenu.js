import React, { useEffect } from "react";
import styled from "styled-components";
import useHover from "./useHover";

const SubMenu = props => {
  const onMouseEnter = () => {
    props.setSubMenuHovered(true);
  };

  const onMouseLeave = () => {
    props.setSubMenuHovered(false);
  };

  useEffect(() => {
    console.log(props.isSubMenuHovered);
    return () => {};
  }, [props.isSubMenuHovered]);

  console.log("subMenu is rendering");
  return (
    <NavWrapper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <ListWrapper>{props.item}</ListWrapper>
    </NavWrapper>
  );
};

export default React.memo(SubMenu);

const NavWrapper = styled.nav`
  position: absolute;
  height: 100%;
  z-index: 3;
  left: 200px;
  background-color: white;
  width: 200px;
  box-shadow: 0px 0px 1px 1px rgba(217, 217, 217, 1);
`;

const ListWrapper = styled.ul`
  height: 100%;
  padding: 6px 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const LinkItem = styled.a`
  font-size: 14px;
`;
