import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  padding-bottom: 100px;
  max-width: 300px;

  img {
    width: 40px;
    height: 40px;
    background-color: #fff;
  }
`;

export const Title = styled.h3`
  color: #fff;
  margin-top: 10px;
`;

export const Description = styled.p`
  color: #aaa;
  text-align: center;
  line-height: 25px;
  margin-top: 5px;
`;
