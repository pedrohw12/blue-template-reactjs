import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const InfoArea = styled.div`
  margin-bottom: 50px;
  text-align: center;

  @media (min-width: 768px) {
    margin-bottom: 0px;
    text-align: left;
  }
`;

export const LetsTalk = styled.h1`
  font-weight: bold;
  font-size: 21px;

  @media (min-width: 1024px) {
    font-size: 32px;
  }
`;

export const Explanation = styled.h2`
  color: #999;

  font-size: 17px;

  @media (min-width: 1024px) {
    font-size: 24px;
  }
`;

export const ButtonArea = styled.div``;

export const WhatsAppButton = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 0px;
  color: #fff;
  background-color: #000;
  padding: 10px 50px;
  border-radius: 10px;

  &:hover {
    opacity: 0.9;
  }

  img {
    margin-right: 10px;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    background-color: #fff;
  }
`;
