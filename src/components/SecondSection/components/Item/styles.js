import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding: 20px; */
  max-width: 300px;
`;

export const FakeIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #fff;
`;

export const Title = styled.h3`
  color: #000;
  margin-top: 10px;
  font-weight: bold;
`;

export const BlueBar = styled.div`
  background-color: #00a8ff;
  height: 3px;
  width: 40px;
  margin-top: 10px;
`;

export const Description = styled.p`
  color: #999;
  text-align: center;
  line-height: 25px;
  margin-top: 30px;
`;
