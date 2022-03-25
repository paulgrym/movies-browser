import styled from "styled-components";
import { css } from "styled-components";
import { ReactComponent as ArrowIconNext } from "../../images/next-arrow.svg";

export const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 200px;
`;

export const PageInfo = styled.span`
  margin: 0 12px;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.darkergrey};

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    margin: 0;
    font-size: 10px;
    line-height: 24px;
  }
`;

export const PageText = styled.span`
  margin: 0 8px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5px;

  &:last-child{
    margin-right: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    margin: 0 2px;
    font-size: 10px;
    line-height: 24px;
  }
`;

export const Button = styled.button`
  display:  flex;
  align-items: center;
  border: none;
  background: ${({ theme }) => theme.colors.lightblue};
  padding: 8px 16px;
  margin-left: 12px;
  border-radius: 5px;
  font-size: 14px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.paginationButtonText};

  ${({ back }) => back && css`
    margin-left: 0px;
    margin-right: 12px;
  `}

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    padding: 8px 12px;
    margin-left: 8px;
  
    ${({ back }) => back && css`
    margin-left: 0px;
    margin-right: 8px;
  `}
  }
`;

export const ButtonText = styled.span`
  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    display:none;
  }
`;

export const Arrow = styled(ArrowIconNext)`
  color: ${({ theme }) => theme.colors.blue};
  margin-left: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    width: 5px;
    height: 8px;
    margin-left: 0px;

    ${({ back }) => back && css`
      transform: rotate(180deg) translateX(0%);
    `}
  }

  ${({ back }) => back && css`
    transform: rotate(180deg) translateX(100%);
  `}

  ${({ mobile }) => mobile && css`
    display:none;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.small}){
      display:block;
      margin-left: 4px;

      ${({ back }) => back && css`
        margin-left: 0px;
        margin-right: 4px;
        transform: rotate(180deg) translateX(-100%);
      `}
    }
  `};
`;