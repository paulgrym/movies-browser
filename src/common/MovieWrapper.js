import styled from "styled-components";

export const MovieWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 312px);
  grid-gap: 24px;
  justify-content: center;
  margin: 12px auto 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    grid-template-columns: 1fr;
    margin-bottom: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    grid-gap: 16px;
  }
`;