import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, selectError, selectLoading, selectMovies } from "./popularMoviesSlice";
import { Section } from "../../../common/Section";
import { Wrapper } from "./styled";
import { Title } from "../../../common/Title";
import { Loader } from "../../../common/Loader";
import { MovieTile } from "../../../common/MovieTile";
import { APIPosterImageUrl } from "../../APIdata";

export const MovieList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch])

  const popularMovies = useSelector(selectMovies);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <Section>
      {error
        ? "Error"
        : <>
          <Title>Popular movies</Title>
          {loading
            ? <Loader />
            : <Wrapper>
              {
                popularMovies.map((movie, index) => (
                  <MovieTile
                    key={index}
                    poster={`${APIPosterImageUrl}/w342${movie.poster_path}`}
                    posterPath={movie.poster_path}
                    title={movie.title}
                    date={movie.release_date.slice(0, 4)}
                    voteAverage={movie.vote_average}
                    voteCount={`${movie.vote_count} votes`}
                  />
                ))
              }
            </Wrapper>
          }
        </>
      }

    </Section>
  );
};
