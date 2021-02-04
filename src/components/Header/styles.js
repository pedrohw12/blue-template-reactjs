import styled from "styled-components";

export const Container = styled.header`
  background: #000;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background: #000;

  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`;
