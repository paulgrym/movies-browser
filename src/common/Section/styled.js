import styled from "styled-components";

export const Wrapper = styled.section`
  max-width: 1368px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-size: 36px;
  line-height: 1.2;
  margin: 24px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    font-size: 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    font-size: 18px;
    margin: 12px 0;
  }
    
`;