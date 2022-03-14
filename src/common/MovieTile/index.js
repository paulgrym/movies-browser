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

export const MovieTile = ({ posterPath, poster, title, date, voteAverage, voteCount, genres }) => {

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
          {
            genres.map((genre, index) => (
              <MovieTileTag key={index}> {genre.name} </MovieTileTag>
            ))
          }
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