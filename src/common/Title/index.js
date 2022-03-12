import styled from "styled-components";

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