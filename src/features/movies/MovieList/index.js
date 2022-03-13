import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  selectMovies,
  selectError,
} from "../../popularMoviesSlice";
import { ErrorPage } from "../../../common/ErrorPage";
import { Section } from "../../../common/Section";
import { Wrapper } from "./styled";
import { MovieTile } from "../../../common/MovieTile";

export const MovieList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const popularMovies = useSelector(selectMovies);
  // const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <>
      {error ? (
        <ErrorPage />
      ) : (
        <Section title={"Popular movies"}>
          <Wrapper>
            {popularMovies.map((movie, index) => (
              <MovieTile
                key={index}
                poster={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                title={movie.title}
                date={movie.release_date.slice(0, 4)}
                voteAverage={movie.vote_average}
                voteCount={`${movie.vote_count} votes`}
              />
            ))}
          </Wrapper>
        </Section>
      )}
    </>
  );
};
