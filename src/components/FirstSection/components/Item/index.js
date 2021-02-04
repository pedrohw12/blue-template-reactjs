import React from "react";

// Images
import Atraia from "../../../../assets/atraia.png";
import Sell from "../../../../assets/sell.png";
import Cube from "../../../../assets/cube.png";

// Styles
import { Container, Title, Description } from "./styles";

const Item = ({ title, description }) => {
  return (
    <Container>
      {title === "Atraia" && <img src={Atraia} alt="logo" />}
      {title === "Encante" && <img src={Cube} alt="logo" />}
      {title === "Venda" && <img src={Sell} alt="logo" />}
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default Item;
