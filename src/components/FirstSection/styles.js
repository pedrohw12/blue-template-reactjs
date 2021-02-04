import styled from "styled-components";
import Banner from '../../assets/banner-portfolio.jpg';
import BannerVertical from '../../assets/banner-portfolio.png';

export const Container = styled.div`
  background-image: url(${BannerVertical});
  background-repeat: no-repeat;
  background-position: center;
  background-color: #000;

  @media (min-width: 768px) {
  background-image: url(${Banner});
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 50px;
  font-weight: bold;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const Explanation = styled.div`
  width: 70%;
  color: #aaa;
  text-align: center;
  line-height: 30px;
  margin-top: 35px;
  margin-bottom: 100px;
`;

export const CardsArea = styled.div`
  display: grid;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-column-gap: 173px;
  }
`;
