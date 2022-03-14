import styled from "styled-components";

export const Wrapper = styled.article`
  background: ${({ theme }) => theme.colors.white};
  padding: 10px 16px;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.02);
  };

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    min-height: 245px;
    padding: 8px;
  }
`;

export const PersonImage = styled.img`
  width: 100%;
  border-radius: 5px;
`;

export const PersonFullName = styled.p`
  margin: 12px 0 24px 0;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 16px;
  }
`;