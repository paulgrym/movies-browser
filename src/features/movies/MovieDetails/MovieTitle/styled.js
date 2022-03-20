import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 64px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    margin-bottom: 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    margin-bottom: 16px;  }
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 600;
  font-size: 64px;
  line-height: 1.2;
  margin: 56px 0 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    font-size: 44px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    font-size: 24px;
  }
`