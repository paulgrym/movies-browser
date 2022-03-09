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
  Wrapper
} from "./styled"
import poster from "../../../images/poster.png"

export const MovieTile = () => {

  return (
    <StyledMovieTile>
      <MovieTileImage src={poster} alt="" />

      <MovieTileContent>
        <MovieTileTitle> Mulan </MovieTileTitle>
        <MovieTileSubtitle>2020</MovieTileSubtitle>

        <MovieTileTags>
          <MovieTileTag> Action </MovieTileTag>
          <MovieTileTag> Adventure </MovieTileTag>
          <MovieTileTag> Drama </MovieTileTag>
        </MovieTileTags>

        <MovieTileRating>
          <MovieTileIcon />
          <MovieTileRate>7,8 </MovieTileRate>
          <MovieTileVotes>137 votes</MovieTileVotes>
        </MovieTileRating>
      </MovieTileContent>

    </StyledMovieTile>
  )
}