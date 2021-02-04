import styled from "styled-components";

export const Container = styled.header`
  background: #215ede;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background: #215ede;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

export const CompanyName = styled.h3`
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 5px;
`;
