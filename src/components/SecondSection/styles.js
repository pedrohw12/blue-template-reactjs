import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding-top: 150px;
  padding-bottom: 150px;
`;

export const Content = styled.div`
  display: flex;

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
  width: 80%;
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
  flex-direction: column;
  justify-content: space-around;
`;

export const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f6fb;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
