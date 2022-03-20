import styled from "styled-components";
import { css } from "styled-components";

export const Container = styled.div`
  text-align: center;
`

export const ShowAllButton = styled.button`
  border:none;
  background:none;
  cursor: pointer;
  padding: 0 0 2px;
  color: ${({ theme }) => theme.colors.waterloo};
  font-size: 20px;
  transition: transform 0.3s;

  &:hover{
    transform: translateY(10%);

    ${({ isAllPeopleShown }) => isAllPeopleShown && css`
      transform: translateY(-10%);
    `}
  }
`

export const Arrow = styled.div`
  color: ${({ theme }) => theme.colors.waterloo};
  font-size: 24px;
`