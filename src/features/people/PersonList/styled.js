import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 208px);
  grid-gap: 24px;
  justify-content: center;
  margin: 12px auto 40px;


  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    grid-template-columns: repeat(auto-fill, 136px);
    grid-gap: 16px;
  }
  `;

