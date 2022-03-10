import { MovieTile } from "./MovieTile";
import { Wrapper } from "./styled";
import { usePopularMovies } from "./usePopularMovies";

export const MovieList = () => {
  const popularMovies = usePopularMovies();

  // console.log(popularMovies);

  return (
    <Wrapper>
      {
        popularMovies?.data?.map((movie, index) => (
          <MovieTile
            key={index}
            poster={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            title={movie.title}
            date={movie.release_date.slice(0, 4)}
            voteAverage={movie.vote_average}
            voteCount={`${movie.vote_count} votes`}
          />
        ))
      }
    </Wrapper>
  )
}