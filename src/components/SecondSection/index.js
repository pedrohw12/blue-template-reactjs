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
import { useState } from "react";

const SecondSection = () => {
  const [disabled, setDisabled] = useState(true);
  const [currentTestimonial, setCurrentTestimonial] = useState({
    text:
      "What I've liked best about building this company has been the opportunity to hire an exceptional group of people. We've not only helped them grow, we've learned from them.",
    author: "Chief Digital Officer",
    authorSubtitle: "Fortune 500 Consumer Packaged Goods Company",
  });
  const testimonials = [
    {
      text:
        "What I've liked best about building this company has been the opportunity to hire an exceptional group of people. We've not only helped them grow, we've learned from them.",
      author: "Chief Digital Officer",
      authorSubtitle: "Fortune 500 Consumer Packaged Goods Company",
    },
    {
      text:
        "Acquis is consistently recognized by top industry publications and recruitment agencies as a leader in its field and a Best Firm to Work For.",
      author: "Pedro Wanderley",
      authorSubtitle: "Desenvolvedor Web e Mobile",
    },
  ];

  function nextTestimonial(currentTestimonial) {
    const testimonialsTextList = testimonials.map((item) => item.text);

    const positionOfCurrentTestimonial = testimonialsTextList.indexOf(
      currentTestimonial.text
    );

    const positionOfNextTestimonial =
      testimonialsTextList.indexOf(currentTestimonial.text) + 1;

    const next = testimonialsTextList[positionOfNextTestimonial];

    const nextObjTestimonial = testimonials.filter((item) => {
      const testimonialPosition = item.text.indexOf(next) + 1;
      return testimonialPosition;
    });

    const lastItemInArray =
      testimonials.length === positionOfCurrentTestimonial + 1;

    if (lastItemInArray) {
      setDisabled(false);
      setCurrentTestimonial(testimonials[0]);
    } else {
      setDisabled(false);
      setCurrentTestimonial(nextObjTestimonial[0]);
    }
  }

  function pastTestimonial(currentTestimonial) {
    const testimonialsTextList = testimonials.map((item) => item.text);

    const positionOfCurrentTestimonial = testimonialsTextList.indexOf(
      currentTestimonial.text
    );

    const positionOfNextTestimonial =
      testimonialsTextList.indexOf(currentTestimonial.text) - 1;

    const next = testimonialsTextList[positionOfNextTestimonial];

    const nextObjTestimonial = testimonials.filter((item) => {
      const testimonialPosition = item.text.indexOf(next) - 1;
      return testimonialPosition;
    });

    const lastItemInArray =
      testimonials.length === positionOfCurrentTestimonial - 1;

    if (lastItemInArray) {
      setDisabled(false);
      setCurrentTestimonial(testimonials[0]);
    } else {
      setDisabled(true);
      setCurrentTestimonial(nextObjTestimonial[0]);
    }
  }

  return (
    <Container className="container-wrap">
      <Content>
        <FormatQuoteIcon className="quote" />
        <InfoArea>
          <Phrases>{currentTestimonial.text}</Phrases>
          <Author>{currentTestimonial.author}</Author>
          <AuthorSubTitle>{currentTestimonial.authorSubtitle}</AuthorSubTitle>
        </InfoArea>
        <ArrowArea>
          <ArrowContainer
            disabled={disabled}
            onClick={() => pastTestimonial(currentTestimonial)}
          >
            <KeyboardArrowLeftIcon />
          </ArrowContainer>
          <ArrowContainer onClick={() => nextTestimonial(currentTestimonial)}>
            <KeyboardArrowRightIcon />
          </ArrowContainer>
        </ArrowArea>
      </Content>
    </Container>
  );
};

export default SecondSection;
