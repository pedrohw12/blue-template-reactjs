import styled from "styled-components";

export const Container = styled.div`
  background-color: #000;
`;

export const Content = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  padding-top: 20px;
  padding-bottom: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  span {
    color: #fff;
    font-family: sans-serif;
  }
`;

export const SocialMediaArea = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;

  img {
    background-color: #fff;
    width: 40px;
    height: 40px;
    margin-right: 3px;
  }
  @media (min-width: 768px) {
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;
