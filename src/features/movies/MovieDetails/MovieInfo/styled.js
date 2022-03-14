import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../../../images/star.svg";
import { ReactComponent as NoImageIcon } from "../../../../images/no-movie-poster.svg";

export const MovieDetailsTile = styled.article`
  background: ${({ theme }) => theme.colors.white};
  padding: 40px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
  padding: 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
  padding: 16px;
  flex-direction:column;
  }
`;

export const NoMovieImageIcon = styled(NoImageIcon)`
  height: 70px;
  width: auto;
  color: ${({ theme }) => theme.colors.transparentWhite};

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    height: 50px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    height: 36px;
  }
`;

export const NoMovieImage = styled.div`
  width: 312px;
  height: 464px;
  background: ${({ theme }) => theme.colors.darkgrey};;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  float:left;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    width: 180px;
    height: 270px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    width: 114px;
    height: 169px;
  }
`;

export const MovieDetailsTileImage = styled.img`
  width: 312px;
  border-radius: 5px;
  float:left;
  margin-right:40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    width: 180px;
    height: unset;
    margin-right:28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    width: 114px;
    margin-right:16px;
  }
`;

export const Wrapper = styled.div`

`