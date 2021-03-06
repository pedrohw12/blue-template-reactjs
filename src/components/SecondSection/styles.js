import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding-top: 50px;
  padding-bottom: 50px;

  @media (min-width: 1024px) {
    padding-top: 150px;
    padding-bottom: 150px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }

  svg {
    color: #215ede;

    &.quote {
      margin-right: 20px;
    }
  }
`;

export const InfoArea = styled.div``;

export const Phrases = styled.h2`
  line-height: 33px;
  color: #000;

  @media (min-width: 1024px) {
    width: 80%;
  }
`;

export const Author = styled.h3`
  color: #000;
  margin-top: 30px;
  font-weight: bold;
  text-transform: uppercase;
`;
export const AuthorSubTitle = styled.h4`
  color: #4d4d4d;
`;

export const ArrowArea = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;

  @media (min-width: 1024px) {
    flex-direction: column;
    margin-top: 0px;
  }
`;

export const ArrowContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f6fb;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 0;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;
