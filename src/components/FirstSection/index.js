import React from "react";

// Images
import Man from "../../assets/man.png";

// Icons
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";

// Styles
import {
  Container,
  Content,
  InfoArea,
  Title,
  BigTitle,
  Explanation,
  ImgArea,
} from "./styles";

const FirstSection = () => {
  return (
    <Container>
      <Content className="container-wrap">
        <InfoArea>
          <Title>Quem somos</Title>
          <BigTitle>
            É Necessário Grandes
            <br /> Pessoas Para Fazerem
            <br /> Grandes Trabalhos.
          </BigTitle>
          <Explanation>
            At Acquis we feel it's important to attract, develop, and retain top
            talent. Accordingly, we have created a 'second family' environment
            where each individual has an opportunity and obligation to
            contribute to our shared success.
          </Explanation>
          <ArrowDropDownCircleIcon fontSize="large" />
        </InfoArea>
        <ImgArea>
          <img src={Man} alt="man" />    
        </ImgArea>
      </Content>
    </Container>
  );
};

export default FirstSection;
