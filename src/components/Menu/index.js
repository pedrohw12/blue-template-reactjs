import React, { useState } from "react";

// Styles
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

// Styles
import { MenuList, MenuListItem, MenuListItemAnchor } from "./styles";

const Menu = ({ setIsOpenMenu, isOpenMenu }) => {
  return (
    <nav className="app-menu">
      <MenuList>
        <MenuListItem>
          {!isOpenMenu && (
            <MenuListItemAnchor onClick={setIsOpenMenu}>
              Menu <MenuIcon color="#fff" />
            </MenuListItemAnchor>
          )}
          {isOpenMenu && (
            <MenuListItemAnchor onClick={setIsOpenMenu}>
              <CloseIcon color="#fff" />
            </MenuListItemAnchor>
          )}
        </MenuListItem>
      </MenuList>
    </nav>
  );
};

export default Menu;
