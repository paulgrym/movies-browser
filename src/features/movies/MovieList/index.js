import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, selectError, selectGenres, selectLoading, selectMovies } from "./popularMoviesSlice";
import { Section } from "../../../common/Section";
import { Wrapper } from "./styled";
import { Title } from "../../../common/Title";
import { Loader } from "../../../common/Loader";
import { ErrorPage } from "../../../common/ErrorPage";
import { MovieTile } from "../../../common/MovieTile";
import { APIImageUrl } from "../../APIdata";
import { nanoid } from "@reduxjs/toolkit";

export const MovieList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch])

  const popularMovies = useSelector(selectMovies);
  const genresTable = useSelector(selectGenres);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <Section>
      {error
        ? <ErrorPage />
        : <>
          <Title>Popular movies</Title>
          {loading
            ? <Loader />
            : <Wrapper>
              {
                popularMovies.map((movie) => (
                  <MovieTile
                    key={nanoid()}
                    poster={`${APIImageUrl}/w342${movie.poster_path}`}
                    posterPath={movie.poster_path}
                    title={movie.title}
                    date={movie.release_date.slice(0, 4)}
                    voteAverage={movie.vote_average}
                    voteCount={`${movie.vote_count} votes`}
                    genres={genresTable.filter((genre) => movie.genre_ids.includes(genre.id))}
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
