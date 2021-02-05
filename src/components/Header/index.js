import React, { useState } from "react";

// Components
import Menu from "../Menu";

// Styles
import { Container, Content, CompanyName, MenuItem } from "./styles";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <Container>
      <Content className="container-wrap">
        {!isOpenMenu && (
          <>
            <CompanyName>Empresa</CompanyName>
            <Menu setIsOpenMenu={() => setIsOpenMenu(true)} />
          </>
        )}
        {isOpenMenu && (
          <>
            <MenuItem>HOME</MenuItem>
            <MenuItem>SOBRE</MenuItem>
            <MenuItem>CONTATO</MenuItem>
            <Menu
              isOpenMenu={isOpenMenu}
              setIsOpenMenu={() => setIsOpenMenu(false)}
            />
          </>
        )}
      </Content>
    </Container>
  );
};

export default Header;
