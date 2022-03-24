import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as ErrorIcon } from "../../images/error.svg";

export const Wrapper = styled.div`
  text-align: center;
  margin-top: 180px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    margin-top: 100px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin-top: 40px;
    padding: 16px;
  }
`;

export const Icon = styled(ErrorIcon)`
  margin-bottom: 38px;
  width: 120px;
  height: 120px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 90px;
    height: 90px;
    margin-bottom: 20px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
  }
`;

export const Info = styled.h2`
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 28px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 20px;
  }
`;

export const Message = styled.p`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  margin: 24px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 20px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 16px;
  }
`;

export const ButtonLink = styled(Link)`
  text-decoration: none; 
  display: inline-block;
  padding: 16px 24px;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue};
  border: none;
  border-radius: 5px;
  transition: 0.5s;
  
  &:hover {
    filter: brightness(130%);
    cursor: pointer;
  }

  &:active {
    filter: brightness(120%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    padding: 12px 16px;
    font-size: 12px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 8px 12px;
    font-size: 12px;
  }
`;
