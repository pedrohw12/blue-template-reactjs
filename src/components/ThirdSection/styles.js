import styled from "styled-components";

export const Container = styled.div`
  background-color: #000;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #000;
  padding: 50px 0px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ImgContainer = styled.div`
  width: 300px;
  height: 300px;
  align-self: center;

  img {
    width: 100%;
  }
`;

export const InfoArea = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    width: 40%;
    text-align: left;
  }
`;

export const AboutMe = styled.p`
  color: #999;
  margin-top: 15px;
  line-height: 25px;
`;

export const MyName = styled.h2`
  color: #fff;
  font-weight: bold;
  margin-top: 30px;
`;

export const Info = styled.h3`
  color: #999;
  opacity: 0.5;
`;
