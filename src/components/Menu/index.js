import React from "react";

// Styles
import MenuIcon from "@material-ui/icons/Menu";

// Styles
import { MenuList, MenuListItem, MenuListItemAnchor } from "./styles";

const Menu = () => {
  return (
    <nav className="app-menu">
      <MenuList>
        <MenuListItem>
          <MenuListItemAnchor href="/">
            Menu <MenuIcon color="#fff" />
          </MenuListItemAnchor>
        </MenuListItem>
      </MenuList>
    </nav>
  );
};

export default Menu;
