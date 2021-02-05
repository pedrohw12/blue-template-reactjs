import styled from "styled-components";

export const Container = styled.div`
  background-color: #215ede;
`;

export const Content = styled.div`
  display: flex;
  padding-bottom: 50px;

  @media (min-width: 768px) {
    padding-top: 50px;
  }

  svg {
    color: #fff;
    opacity: 0.5;
  }
`;

export const InfoArea = styled.div``;

export const Title = styled.h4`
  color: #fff;
`;

export const BigTitle = styled.h1`
  color: #fff;
  font-size: 43px;
  font-weight: bold;
  margin-top: 20px;

  @media (min-width: 768px) {
    font-size: 50px;
  }
`;

export const Explanation = styled.div`
  color: #fff;
  line-height: 30px;
  margin-top: 20px;
  margin-bottom: 70px;

  @media (min-width: 768px) {
    width: 40%;
  }
`;

export const ImgArea = styled.div`
  position: absolute;
  right: 0;
  width: 300px;

  img {
    display: none;
    position: absolute;
    right: 0px;

    @media (min-width: 768px) {
      display: block;
    }
  }
`;
