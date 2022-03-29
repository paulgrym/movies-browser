import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  selectError,
  selectLoading,
  selectGenres,
  selectMovies,
  selectTotalResults,
  fetchMoviesSearch,
  selectTotalPages,
} from "./popularMoviesSlice";
import { Section } from "../../../common/Section";
import { MovieWrapper } from "../../../common/MovieWrapper";
import { Title } from "../../../common/Title";
import { Loader } from "../../../common/Loader";
import { ErrorPage } from "../../../common/ErrorPage";
import { MovieTile } from "../../../common/MovieTile";
import { APIImageUrl } from "../../APIdata";
import { queryParameters } from "../../../common/queryParameters";
import { NoResultsPage } from "../../../common/NoResultsPage";
import { useQueryParameter } from "../../../common/queryParameterHooks";
import { nanoid } from "@reduxjs/toolkit";
import { Pagination } from "../../../common/Pagination";
import { capitalize } from "../../capitalize";
import { MainContainer } from "../../../common/MainContainer";

export const MovieList = () => {
  const dispatch = useDispatch();
  const query = useQueryParameter(queryParameters.search);

  const paramsPage = +useQueryParameter(queryParameters.page);
  const page = paramsPage === 0 ? 1 : paramsPage;

  const genresTable = useSelector(selectGenres);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const movies = useSelector(selectMovies);
  const totalResults = useSelector(selectTotalResults);
  const totalPages = useSelector(selectTotalPages); //fix wrong totalPages in popularMovies API

  useEffect(() => {
    query
      ? dispatch(fetchMoviesSearch({ query, page }))
      : dispatch(fetchMovies({ query, page }));
  }, [dispatch, query, page]);

  return (
    <MainContainer>
      {query && totalResults === 0
        ? <NoResultsPage query={query} />
        : error
          ?
          <Section>
            <ErrorPage />
          </Section>
          : loading
            ? <Section>
              <Title>
                {query
                  ? `Search results for "${capitalize(query)}"`
                  : "Popular movies"}
              </Title>
              <Loader />
            </Section>
            : error
              ? <Section>
                <ErrorPage />
              </Section>
              : <>
                <Section>
                  <Title>
                    {query
                      ? `Search results for "${capitalize(query)}" (${totalResults})`
                      : "Popular movies"}
                  </Title>
                  <MovieWrapper>
                    {movies.map((movie) => (
                      <MovieTile
                        key={nanoid()}
                        poster={`${APIImageUrl}/w342${movie.poster_path}`}
                        posterPath={movie.poster_path}
                        title={movie.title}
                        date={movie.release_date ? movie.release_date.slice(0, 4) : "Date: Unknown"}
                        voteAverage={movie.vote_average}
                        voteCount={`${movie.vote_count} votes`}
                        genres={genresTable.filter((genre) => movie.genre_ids.includes(genre.id))}
                        id={movie.id}
                      />
                    ))}
                  </MovieWrapper>
                </Section>
                <Pagination totalPages={totalPages} page={page} />
              </>
      }
    </MainContainer >
  );
};
