import styled from "styled-components";

export const Wrapper = styled.article`
  background: ${({ theme }) => theme.colors.white};
  min-height: 339px;
  display: grid;
  grid-template-rows: auto 1fr;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  border-radius: 5px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.02);
  };

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    min-height: 245px;
  }
`;

export const PersonImage = styled.img`
  padding: 10px 16px;
  height: 286px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    height: 196px;
    padding: 8px;
  }
`;

export const PersonFullName = styled.p`
  margin: 0;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 22px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 16px;
  }
`;