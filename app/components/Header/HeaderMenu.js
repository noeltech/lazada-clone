import React from "react";
import styled from "styled-components";

const menus = [
  "SAVE MORE ON APP",
  "SELL ON LAZADA",
  "CUSTOMER CARE",
  "TRACK MY ORDER",
  "LOGIN",
  "SIGNUP"
];

const HeaderMenu = () => {
  // create a menu list with the array of menus
  const MenuListItems = menus.map(item => {
    return (
      <MenuListItem key={item}>
        <LinkItem href="/">{item}</LinkItem>
      </MenuListItem>
    );
  });

  return (
    <div>
      <MenuList>{MenuListItems}</MenuList>
    </div>
  );
};

const MenuList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  font-weight: 500;
  padding: 6px;
  background: #f5f5f5;
`;

const MenuListItem = styled.li`
  margin-right: 24px;
  flex-shrink: 0;
`;

const LinkItem = styled.a`
  color: black;
  font-size: 11px;
`;

export default HeaderMenu;
