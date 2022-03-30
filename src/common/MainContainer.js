import styled from "styled-components";

export const MainContainer = styled.div`
  margin: 56px 0 72px;
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    margin: 32px 0 56px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    margin: 24px 0 40px;
  }
`;