import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../../../images/star.svg";
import { ReactComponent as NoImageIcon } from "../../../../images/no-movie-poster.svg";

export const MovieTile = styled.article`
  background: ${({ theme }) => theme.colors.white};
  padding: 40px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    padding: 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    padding: 16px;
    display: flex;
    flex-direction: column;
  }
`;

export const Wrapper = styled.span``;

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
  margin-right: 40px;
  float: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    width: 180px;
    height: 270px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    width: 114px;
    height: 169px;
  }
`;

export const MovieImage = styled.img`
  width: 312px;
  border-radius: 5px;
  margin-right: 40px;
  float: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    width: 180px;
    height: unset;
    margin-right: 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    width: 114px;
    margin-right: 16px;
  }
`;

export const Content = styled.div``;

export const Title = styled.h3`
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
  margin: 0 0 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    font-weight: 500;
    font-size: 26px;
    line-height: 1.3;
    margin: 0 0 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    font-size: 16px;
    margin: 0 0 4px;
  }
`;

export const Year = styled.p`
  font-weight: 400;
  font-size: 22px;
  line-height: 1.2;
  margin: 24px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    font-size: 16px;
    margin: 8px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    font-size: 13px;
    margin: 8px 0;
    color: ${({ theme }) => theme.colors.darkergrey};
  }
`

export const Tags = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0 8px -4px;
`;

export const Tag = styled.li`
  background: ${({ theme }) => theme.colors.grey};
  border-radius: 5px;
  padding: 8px 16px;
  margin: 4px 4px;
  font-weight: 400;
  font-size: 14px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    padding: 6px 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    padding: 4px 8px;
    font-size: 10px;
    line-height: 1.1;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    font-size: 14px;
  }
`;