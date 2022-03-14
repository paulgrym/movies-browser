import { useSelector } from "react-redux";
import { selectMovies } from "../movieDetailsSlice";
import { MovieDetailsTile, MovieDetailsTileImage, NoMovieImage, NoMovieImageIcon, Wrapper } from "./styled"
import { APIImageUrl } from "../../../APIdata.js"

export const MovieInfo = () => {
  const moviesDetails = useSelector(selectMovies);
  console.log(moviesDetails)

  const posterPath = moviesDetails[0]?.poster_path;
  // const posterPath = null;

  return (
    <MovieDetailsTile>
      <Wrapper>
        {posterPath
          ? <MovieDetailsTileImage src={`${APIImageUrl}/w342${moviesDetails[0]?.poster_path}`} alt="" />
          : <NoMovieImage><NoMovieImageIcon /></NoMovieImage>
        }

      </Wrapper>
      <p>{moviesDetails[0]?.overview}</p>
    </MovieDetailsTile>
  );
};