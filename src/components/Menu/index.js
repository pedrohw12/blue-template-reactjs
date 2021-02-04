import React, { useState, useEffect } from "react";

// Styles
import { MenuList, MenuListItem, MenuListItemAnchor } from "./styles";

const Menu = () => {
  const [location, setLocation] = useState("/");
  useEffect(() => {
    setLocation(window.location.pathname);
  }, []);

  return (
    <nav className="app-menu">
      <MenuList>
        <MenuListItem>
          <MenuListItemAnchor
            href="/"
            borderColor={location === "/" ? "#F1B416" : "#000"}
            color={location === "/" ? "#F1B416" : "#fff"}
          >
            Home
          </MenuListItemAnchor>
        </MenuListItem>
        <MenuListItem>
          <MenuListItemAnchor
            href="/#contato"
            borderColor={location === "/contato" ? "#F1B416" : "#000"}
          >
            Contato
          </MenuListItemAnchor>
        </MenuListItem>
        <MenuListItem>
          <MenuListItemAnchor
            href="/#sobre"
            borderColor={location === "/sobre" ? "#F1B416" : "#000"}
          >
            Sobre
          </MenuListItemAnchor>
        </MenuListItem>
      </MenuList>
    </nav>
  );
};

export default Menu;
