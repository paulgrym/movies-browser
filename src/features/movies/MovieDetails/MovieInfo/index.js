import { useSelector } from "react-redux";
import { selectMovie } from "../movieDetailsSlice";
import {
  Content,
  MovieTile,
  MovieImage,
  Title,
  NoMovieImage,
  NoMovieImageIcon,
  Wrapper,
  Description,
  Year,
  Tag,
  Tags,
  Rating,
  RateIcon,
  Rate,
  Votes,
  MaxRate,
  DetailedInfo,
  Key,
  Value
} from "./styled";
import { APIImageUrl } from "../../../APIdata.js";
import { nanoid } from "@reduxjs/toolkit";

export const MovieInfo = () => {
  const movieDetails = useSelector(selectMovie);

  const posterPath = movieDetails.poster_path;

  if (movieDetails && movieDetails.length !== 0) {
    return (
      <MovieTile>
        <Wrapper>
          {posterPath
            ? <MovieImage src={`${APIImageUrl}/w342${movieDetails.poster_path}`} alt="" />
            : <NoMovieImage><NoMovieImageIcon /></NoMovieImage>
          }
          <Content>
            <Title>{movieDetails.title}</Title>
            <Year>{movieDetails.release_date?.slice(0, 4)}</Year>
            <DetailedInfo>
              <Key>Production: </Key>
              <Value>
                {
                  movieDetails.production_countries.length !== 0
                    ? movieDetails.production_countries.map(({ name }) => name).join(", ")
                    : "Unknown"
                }
              </Value>
            </DetailedInfo>
            <DetailedInfo>
              <Key>Release date: </Key>
              <Value>
                {
                  movieDetails.release_date
                    ? (new Date(movieDetails.release_date)).toLocaleDateString()
                    : "Unknown"
                }
              </Value>
            </DetailedInfo>
            <Tags>
              {movieDetails.genres.map(genre => <Tag key={nanoid()}>{genre.name}</Tag>)}
            </Tags>
            <Rating>
              <RateIcon />
              <Rate>{movieDetails.vote_average?.toFixed(1).replace(".", ",")} </Rate>
              <MaxRate>/10 </MaxRate>
              <Votes>{movieDetails.vote_count} votes</Votes>
            </Rating>
          </Content>
        </Wrapper>
        <Description>{movieDetails.overview}</Description>
      </MovieTile>
    );
  } else return null;
};