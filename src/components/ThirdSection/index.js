import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

// Images
// import Me from "../../assets/me.png";

// Styles
import {
  Container,
  Content,
  InfoArea,
  AboutMe,
  LeftSide,
  RightSide,
  Paragraph,
} from "./styles";

const ThirdSection = () => {
  return (
    <Container>
      <Content className="container-wrap">
        <LeftSide></LeftSide>
        <RightSide className="RIGHT_SIDE">
          <AboutMe>
            Acquis is consistently recognized by top industry
            <br /> publications and recruitment agencies as a leader in
            <br /> its field and a Best Firm to Work For.
          </AboutMe>

          <InfoArea>
            <ScrollableAnchor id={"sobre"}>
              <Paragraph>
                This recognition may not come as a surprise to those who know
                the passion and drive of the Acquis team to deliver excellent
                results for our clients.
              </Paragraph>
            </ScrollableAnchor>
          </InfoArea>
        </RightSide>
      </Content>
    </Container>
  );
};

export default ThirdSection;
