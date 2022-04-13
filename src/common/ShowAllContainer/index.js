import styled from "styled-components";
import { css } from "styled-components";

export const Container = styled.div`
  text-align: center;
`;

export const ShowAllButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  padding: 0 0 2px;
  color: ${({ theme }) => theme.colors.waterloo};
  font-size: 16px;
  transition: transform 0.3s;

  &:hover{
    transform: translateY(10%);

    ${({ isAllShown }) => isAllShown && css`
      transform: translateY(-10%);
    `}
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    font-size: 14px;
  }
`;

export const Arrow = styled.div`
  color: ${({ theme }) => theme.colors.waterloo};
  font-size: 18px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    font-size: 16px;
  }
`;