import styled from "styled-components";

export const Container = styled.div`
  background-color: #215ede;
`;

export const Content = styled.div`
  display: flex;
  padding-top: 50px;
  padding-bottom: 50px;

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
  font-size: 50px;
  font-weight: bold;
  margin-top: 20px;
`;

export const Explanation = styled.div`
  width: 40%;
  color: #fff;
  line-height: 30px;
  margin-top: 20px;
  margin-bottom: 70px;
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
