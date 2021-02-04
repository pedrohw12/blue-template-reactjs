import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

// Images
import Me from "../../assets/me.png";

// Styles
import {
  Container,
  Content,
  ImgContainer,
  InfoArea,
  AboutMe,
  MyName,
  Info,
} from "./styles";

const ThirdSection = () => {
  return (
    <Container>
      <Content className="container-wrap">
        <ImgContainer>
          <img src={Me} alt="owner" />
        </ImgContainer>

        <InfoArea>
          <ScrollableAnchor id={"sobre"}>
            <AboutMe>
              Eu sou apaixonado por tecnologia e marketing digital. Estou sempre
              atento ao que há de mais atual no mercado e meu compromisso é
              impactar vidas e alavancar negócios.
            </AboutMe>
          </ScrollableAnchor>
          <AboutMe>
            E essas são algumas das razões pelas quais eu faço o que faço.
          </AboutMe>
          <AboutMe>
            Sou focado em resultados e ajudo empreendedores que estejam
            empenhados nos seus negócios a venderem mais através da internet.
          </AboutMe>
          <MyName>Pedro Wanderley</MyName>
          <Info>Estratégias de marketing digital</Info>
        </InfoArea>
      </Content>
    </Container>
  );
};

export default ThirdSection;
