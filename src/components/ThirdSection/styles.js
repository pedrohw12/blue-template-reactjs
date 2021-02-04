import styled from "styled-components";

export const Container = styled.div`
  background-color: #082d73;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #082d73;
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
  align-self: flex-end;

  @media (min-width: 768px) {
    width: 40%;
    text-align: left;
  }
`;

export const AboutMe = styled.h2`
  color: #fff;
  line-height: 25px;
  line-height: 30px;
  border-bottom: 1px solid;
  padding-bottom: 100px;
  padding-top: 50px;
`;

export const Paragraph = styled.h4`
  color: #ccd3e3;
  margin-top: 50px;
  line-height: 25px;
  line-height: 30px;
`;

export const LeftSide = styled.div`
  display: flex;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
