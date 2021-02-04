import React from "react";

// Styles
import { Container, FakeIcon, Title, Description } from "./styles";

const Item = ({ title, description }) => {
  return (
    <Container>
      <FakeIcon />
      <Title>{title}</Title>
      {/* <BlueBar /> - Importar dos styles */}
      <Description>{description}</Description>
    </Container>
  );
};

export default Item;
