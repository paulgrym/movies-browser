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
} from "./styled"

export const MovieTile = ({ poster, title, date, voteAverage, voteCount }) => {

  return (
    <StyledMovieTile>
      <MovieTileImage src={poster} alt="" />

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
  )
}