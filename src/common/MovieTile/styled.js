import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../images/star.svg";
import { ReactComponent as NoImageIcon } from "../../images/no-movie-poster.svg";

export const StyledMovieTile = styled.article`
  min-height: 650px;
  background: ${({ theme }) => theme.colors.white};
  padding:16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  border-radius: 5px;
  transition: transform 0.5s;

  &:hover{
    transform: scale(1.02);
  }
 
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    flex-direction: row;
    min-height: 200px ;
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    min-height: 200px;
    min-width: 288px;
  }
`;

export const NoMovieImageIcon = styled(NoImageIcon)`
  height: 50px;
  width: auto;
  color: ${({ theme }) => theme.colors.transparentWhite};

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    height: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    height: 28px;
  }
`;

export const NoMovieImage = styled.div`
  flex-shrink:0;
  height: 418px;
  background: ${({ theme }) => theme.colors.darkgrey};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    width: 180px;
    height: 270px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    width: 114px;
    height: 171px;
  }
`;

export const MovieTileImage = styled.img`
  height: 418px;
  border-radius: 5px;
  object-fit: cover;
  object-position: center top;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    height: 270px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    height: 171px;
  }
`;

export const MovieTileContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const MovieTileTitle = styled.h3`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  margin: 0 0 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    font-size: 16px;
    margin-bottom: 4px;
  }
`;

export const MovieTileSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.darkergrey};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  line-height: 1.5 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    font-size: 13px;
    line-height: 1.3;
  }
`;
export const MovieTileTags = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0 8px -4px;
`;

export const MovieTileTag = styled.li`
  background: ${({ theme }) => theme.colors.grey};
  border-radius: 5px;
  padding: 8px 16px;
  margin: 4px 4px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    padding: 6px 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    padding: 4px 8px;
    font-size: 10px;
    line-height: 1.1;
  }
`;

export const MovieTileRating = styled.div`
  display: flex;
  line-height: 1.5;
  flex-grow: 1;
  align-items: flex-end;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    flex-grow: 0;
    align-items: flex-start;
  }
`;

export const MovieTileIcon = styled(StarIcon)`
  color: ${({ theme }) => theme.colors.yellow};
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    width: 16px;
    line-height: 1.3;
  }
`;

export const MovieTileRate = styled.span`
  font-weight: 600;
  font-size: 16px;
  margin-left: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    font-size: 13px;
    margin-left: 8px;
  }
`;

export const MovieTileVotes = styled.span`
  color: ${({ theme }) => theme.colors.darkergrey};
  font-weight: 400;
  font-size: 16px;
  margin-left: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    font-size: 13px;
    margin-left: 8px;
  }
`;
