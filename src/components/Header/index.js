import React from "react";

// Components
import Menu from "../Menu";

// Styles
import { Container, Content, CompanyName } from "./styles";

const Header = () => (
  <Container>
    <Content className="container-wrap">
      <CompanyName>Empresa</CompanyName>
      <Menu />
    </Content>
  </Container>
);

export default Header;
