import React from "react";

// Icons
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";

// Styles
import {
  Container,
  Content, 
  InfoArea,
  Phrases,
  Author,
  AuthorSubTitle,
  ArrowArea,
  ArrowContainer,
} from "./styles";

const SecondSection = () => {
  return (
    <Container className="container-wrap">
      <Content>
        <FormatQuoteIcon className="quote" />
        <InfoArea>
          <Phrases>
            What I've liked best about building this company has been the
            opportunity to hire an exceptional group of people. We've not only
            helped them grow, we've learned from them.
          </Phrases>
          <Author>Chief Digital Officer</Author>
          <AuthorSubTitle>
            Fortune 500 Consumer Packaged Goods Company
          </AuthorSubTitle>
        </InfoArea>
        <ArrowArea>
          <ArrowContainer>
            <KeyboardArrowLeftIcon />
          </ArrowContainer>
          <ArrowContainer>
            <KeyboardArrowRightIcon />
          </ArrowContainer>
        </ArrowArea>
      </Content>
    </Container>
  );
};

export default SecondSection;
