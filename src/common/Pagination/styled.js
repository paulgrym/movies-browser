import styled from "styled-components";
import { css } from "styled-components";
import { ReactComponent as ArrowIconNext } from "./next-arrow.svg";

export const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    margin-top: 32px;
  }
`;

export const PageInfo = styled.span`
  margin: 0 12px;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    margin: 0;
    font-size: 14px;
    line-height: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    font-size: 10px;
  }
`;

export const PageText = styled.span`
  margin: 0 8px;
  color: ${({ theme }) => theme.colors.woodsmoke};
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5px;

  &:last-child{
    margin-right: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    margin: 0 3px;
    font-size: 14px;
    line-height: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    font-size: 10px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: ${({ theme }) => theme.colors.pattensBlue};
  padding: 8px 16px;
  margin-left: 12px;
  border-radius: 5px;
  font-size: 14px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.mineShaft};
  cursor: pointer;
  transition: filter 0.4s;

  ${({ back }) => back && css`
    margin-left: 0px;
    margin-right: 12px;
  `}

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    padding: 8px 12px;
    margin-left: 8px;
  
    ${({ back }) => back && css`
      margin-left: 0px;
      margin-right: 8px;
    `}
  }

  &:hover {
    filter: brightness(95%);
  }

  &:active {
    filter: brightness(85%);
  }

  &:disabled{
    background: ${({ theme }) => theme.colors.mystic};
    color: ${({ theme }) => theme.colors.woodsmoke};
    cursor: default;
    filter: unset;
  }
`;

export const ButtonText = styled.span`

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    display:none;
  }
`;

export const Arrow = styled(ArrowIconNext)`
  color: ${({ theme }) => theme.colors.scienceBlue};
  margin-left: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    margin-left: 0px;
    width: 6px;
    height: 10px;

    ${({ back }) => back && css`
      transform: rotate(180deg) translateX(0%);
    `}
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    width: 5px;
    height: 8px;
  }

  ${({ back }) => back && css`
    transform: rotate(180deg) translateX(100%);
  `}

  ${({ mobile }) => mobile && css`
    display: none;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
      display: block;
      margin-left: 4px;

      ${({ back }) => back && css`
        margin-left: 0px;
        margin-right: 4px;
        transform: rotate(180deg) translateX(-100%);
      `}
    }
  `};

  ${Button}:disabled & {
    color: ${({ theme }) => theme.colors.waterloo};
  }
`;