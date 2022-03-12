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

export const MovieTile = ({ posterPath, poster, title, date, voteAverage, voteCount }) => {

  return (
    <StyledMovieTile>
      {posterPath
        ? <MovieTileImage src={poster} alt="" />
        : <NoMovieImage><NoMovieImageIcon /></NoMovieImage>
      }

      <MovieTileContent>
        <MovieTileTitle> {title} </MovieTileTitle>
        <MovieTileSubtitle>{date}</MovieTileSubtitle>

        <MovieTileTags>
          <MovieTileTag> Action </MovieTileTag>
          <MovieTileTag> Adventure </MovieTileTag>
          <MovieTileTag> Drama </MovieTileTag>
        </MovieTileTags>

        <MovieTileRating>
          <MovieTileIcon />
          <MovieTileRate>{voteAverage} </MovieTileRate>
          <MovieTileVotes>{voteCount}</MovieTileVotes>
        </MovieTileRating>
      </MovieTileContent>

    </StyledMovieTile>
  );
};