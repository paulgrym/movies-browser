import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../../../images/star.svg";

export const Wrapper = styled.div`
  margin-bottom: 64px;
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.extraLarge}){
    margin-bottom: 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    margin-bottom: 16px;  
  }
`;

export const BackdropContainer = styled.div`
  position: relative;
  max-width: 1368px;
  margin: 0 5%;

  &&::after{
    content: "";
    position: absolute;
    z-index: 2;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;

    background: 
    linear-gradient(270deg, #000000 0%, rgba(0, 0, 0, 0.689555) 4.66%, rgba(0, 0, 0, 0.439033) 9.34%, rgba(0, 0, 0, 0.20628) 15.16%, rgba(0, 0, 0, 0) 24.22%), 
    linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0.689555) 4.66%, rgba(0, 0, 0, 0.439033) 9.34%, rgba(0, 0, 0, 0.20628) 15.16%, rgba(0, 0, 0, 0) 24.22%),
    linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.689555) 4.66%, rgba(0, 0, 0, 0.439033) 9.34%, rgba(0, 0, 0, 0.20628) 15.16%, rgba(0, 0, 0, 0) 24.22%), 
    linear-gradient(189.44deg, rgba(0, 0, 0, 0) 58.48%, rgba(0, 0, 0, 0.106473) 63.17%, rgba(0, 0, 0, 0.235359) 68.85%, rgba(0, 0, 0, 0.492821) 78.08%, rgba(0, 0, 0, 0.740286) 85.86%, #000000 92.87%);
  }
`;

export const Backdrop = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left top;
`;

export const Container = styled.div`
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  bottom: 8%;
  left: 5%;
  z-index: 3;
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 64px;
  line-height: 1.2;
  margin: 56px 0 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.extraLarge}){
    font-size: 38px;
    margin: 30px 0 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    font-size: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    font-size: 24px;
    margin: 8px 0 8px;
  }
`;

export const Rating = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 24px 0 0;
  font-size: 16px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.extraLarge}){
    margin: 8px 0 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    font-size: 10px;
    flex-direction: row;
    align-items: flex-end;
    flex-wrap: wrap;
    gap: 8px;
  }
`;

export const RateContainer = styled.div``;

export const RateIcon = styled(StarIcon)`
  color: ${({ theme }) => theme.colors.candlelight};
  height: auto;
  width: 40px;
  vertical-align: bottom;

  @media (max-width: ${({ theme }) => theme.breakpoints.extraLarge}){
    width: 26px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    width: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    width: 16px;
  }
`;

export const Rate = styled.span`
  font-weight: 500;
  font-size: 30px;
  margin: 0 4px 0 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.extraLarge}){
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    font-size: 16px;
    margin: 0 2px 0 4px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    font-weight: 600;
    font-size: 14px;
  }
`;

export const MaxRate = styled.span`
  font-size: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.extraLarge}){
    font-size: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    font-size: 10px;
  }
`;

export const Votes = styled.span`
  font-size: 16px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.extraLarge}){
    font-size: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    font-size: 10px;
  }
`;