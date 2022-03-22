import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../../../images/star.svg";


export const Wrapper = styled.div`
  margin-bottom: 64px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    margin-bottom: 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    margin-bottom: 16px;  }
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 600;
  font-size: 64px;
  line-height: 1.2;
  margin: 56px 0 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    font-size: 44px;
    margin: 30px 0 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    font-size: 24px;
    margin: 8px 0 8px;
  }
`

export const Rating = styled.div`
  margin: 24px 0 56px;
  font-size: 16px;
  line-height: 1.2;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    margin: 8px 0 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    font-size: 10px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 8px;
    gap: 8px;
  }
`;

export const RateContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    margin-bottom: 0;

  }
`

export const RateIcon = styled(StarIcon)`
  color: ${({ theme }) => theme.colors.yellow};
  height: auto;
  width: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    width: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    width: 16px;
  }
`;

export const Rate = styled.span`
  font-weight: 500;
  font-size: 30px;
  line-height: 1.3;
  margin: 0 8px;


  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    font-weight: 600;
    font-size: 14px;
    margin: 0 2px 0 4px;
  }
`;

export const MaxRate = styled.span`
  font-size: 16px;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    font-size: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    font-size: 10px;
  }
`

export const Votes = styled.p`
  font-size: 16px;
  line-height: 1.2;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    font-size: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    font-size: 10px;
  }
`;