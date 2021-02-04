import React from "react";

// Components
import Menu from "../Menu";

// Styles
import { Container, Content } from "./styles";

const Header = () => (
  <Container>
    <Content className="container-wrap">
      <Menu />
    </Content>
  </Container>
);

export default Header;
