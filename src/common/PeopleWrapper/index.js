import styled from "styled-components";

export const PeopleWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 248px);
  grid-gap: 24px;
  justify-content: center;
  margin: 12px auto 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    grid-template-columns: repeat(auto-fill, 170px);
    grid-gap: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    grid-template-columns: repeat(auto-fill, 136px);
    grid-gap: 16px;
  }
`;