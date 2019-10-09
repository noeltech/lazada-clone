import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SubMenu from "./SubMenu";
import MenuItem from "./MenuItem";
import useHover from "./useHover";

const product_category = [
  "Electronic Devices",
  "Electronic Accessories",
  "TV & Home Appliances",
  "Health & Beauty",
  "Babies & Toys",
  "Groceries & Pets",
  "Home & Lifestyle",
  "Women's Fashion",
  "Men's Fashion",
  "Fashion Accessories",
  "sports",
  "automotive"
];

const MainMenuNav = () => {
  //use the hover listener

  const [currentMenu, setCurrentMenu] = useState("");
  const [menuList, setMenuList] = useState("");
  // state of sub menu if hovered or not
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);
  const [isSubMenuHovered, setSubMenuHovered] = useState(false);
  // const [hoverLocation, setHoverLocation] = useState("");

  const onMouseEnter = e => {
    const hovered = e.currentTarget.dataset.value;
    // setHoverLocation(hovered);
    setCurrentMenu(hovered);
    setSubMenuOpen(true);
    setMenuList(hovered);
    console.log(hovered);
  };

  const hoverIntent = () => {
    if (currentHoverLocation === hoverLocation) {
    }
  };

  const onMouseLeave = e => {
    e.stopPropagation();
    // const leavedElement = e.currentTarget.dataset.value;
    // if (leavedElement === "menuContainer") {
    setCurrentMenu("false");
    setSubMenuOpen(false);
    console.log("mouse is out of Main Menu");
    // }
  };
  // create a list of product category menu
  const category_lists = product_category.map(item => {
    return (
      <MenuItem
        key={item}
        item={item}
        isActive={currentMenu === item ? true : false}
        onMouseEnter={onMouseEnter}
        // hoverIntent={hoverIntent}
        // hoverLocation={hoverLocation}
      />
    );
  });

  console.log("Main Menu is rendering");
  return (
    <NavWrapper onMouseLeave={onMouseLeave} value="menuContainer">
      <ListWrapper>{category_lists}</ListWrapper>
      {isSubMenuOpen && (
        <SubMenu
          item={menuList}
          setSubMenuHovered={setSubMenuHovered}
          isSubMenuHovered={isSubMenuHovered}
        />
      )}
    </NavWrapper>
  );
};

export default MainMenuNav;

const NavWrapper = styled.nav`
  flex: 2 1 250px;

  display: flex;
  position: relative;
  box-shadow: 0px 0px 1px 1px rgba(217, 217, 217, 1);
`;

const ListWrapper = styled.ul`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
