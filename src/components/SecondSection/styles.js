import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding-top: 50px;
  margin-bottom: 100px;
`;

export const Title = styled.h1`
  color: #000;
  font-size: 50px;
  font-weight: bold;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const CardsArea = styled.div`
  display: grid;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-gap: 173px;
  }
`;
