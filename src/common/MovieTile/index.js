import { nanoid } from "@reduxjs/toolkit";
import { toMovie } from "../../routes";
import {
  MovieTileContent,
  MovieTileIcon,
  MovieTileImage,
  MovieTileRate,
  MovieTileRating,
  MovieTileSubtitle,
  MovieTileTag,
  MovieTileTags,
  MovieTileTitle,
  MovieTileVotes,
  StyledMovieTile,
  NoMovieImage,
  NoMovieImageIcon,
} from "./styled";

export const MovieTile = ({ posterPath, poster, title, date, voteAverage, voteCount, genres, id }) => {

  return (
    <StyledMovieTile to={toMovie({ id: id })}>
      {posterPath
        ? <MovieTileImage src={poster} alt="" />
        : <NoMovieImage><NoMovieImageIcon /></NoMovieImage>
      }

      <MovieTileContent>
        <MovieTileTitle> {title} </MovieTileTitle>
        <MovieTileSubtitle>{date}</MovieTileSubtitle>

        <MovieTileTags>
          {
            genres.map((genre) => (
              <MovieTileTag key={nanoid()}> {genre.name} </MovieTileTag>
            ))
          }
        </MovieTileTags>

        <MovieTileRating>
          <MovieTileIcon />
          <MovieTileRate>{voteAverage?.toFixed(1).replace(".", ",")} </MovieTileRate>
          <MovieTileVotes>{voteCount}</MovieTileVotes>
        </MovieTileRating>
      </MovieTileContent>

    </StyledMovieTile>
  );
};