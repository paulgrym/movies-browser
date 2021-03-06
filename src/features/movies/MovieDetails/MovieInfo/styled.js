import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../../../images/star.svg";
import { ReactComponent as NoImageIcon } from "../../../../images/no-movie-poster.svg";

export const MovieTile = styled.article`
  background: ${({ theme }) => theme.colors.white};
  padding: 40px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  overflow: hidden;
  margin-bottom: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    padding: 28px;
    margin-bottom: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    padding: 16px;
    display: flex;
    flex-direction: column;
    margin-bottom: 21px;
  }
`;

export const Wrapper = styled.div``;

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
  background: ${({ theme }) => theme.colors.silver};;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 40px;
  float: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    width: 180px;
    height: 270px;
    margin-right: 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    width: 114px;
    height: 169px;
    margin: 0 16px 16px 0;
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
    margin: 0 16px 16px 0;
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
    color: ${({ theme }) => theme.colors.waterloo};
  }
`;

export const DetailedInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 18px;
  line-height: 1.2;
  margin: 8px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    font-size: 15px;
    line-height: 1.2;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    font-size: 12px;
    line-height: 1.3;
  }
`;

export const Key = styled.span`
  color: ${({ theme }) => theme.colors.stormGray};
  margin-right: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    display: none;
  }
`;

export const Value = styled.span``;

export const Tags = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin: 24px 0px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    gap: 8px;
    margin: 12px 0px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    margin: 8px 0px;
  }
`;

export const Tag = styled.li`
  background: ${({ theme }) => theme.colors.mystic};
  border-radius: 5px;
  padding: 8px 16px;
  font-size: 14px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    font-size: 12px;
    padding: 6px 12px;
    gap: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    padding: 4px 8px;
    font-size: 10px;
    line-height: 1.1;
  }
`;

export const Rating = styled.div`
  margin: 24px 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    margin: 8px 0 16px;
  }
`;

export const RateIcon = styled(StarIcon)`
  color: ${({ theme }) => theme.colors.candlelight};
  height: auto;
  width: 24px;
  vertical-align: top;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    width: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    width: 16px;
  }
`;

export const Rate = styled.span`
  font-weight: 500;
  font-size: 22px;
  margin: 0 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    font-weight: 600;
    font-size: 13px;
  }
`;

export const MaxRate = styled.span`
  font-size: 14px;
  line-height: 1.2;
  margin-right: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    font-size: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    display: none;
  }
`;

export const Votes = styled.span`
  color: ${({ theme }) => theme.colors.woodsmoke};
  font-size: 14px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    font-size: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    color: ${({ theme }) => theme.colors.waterloo};
    font-size: 13px;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  line-height: 1.6;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    font-size: 14px;
  }
`;