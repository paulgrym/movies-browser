import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  selectError,
  selectLoading,
  selectGenres,
  selectMovieByQuery,
} from "./popularMoviesSlice";
import { Section } from "../../../common/Section";
import { Wrapper } from "./styled";
import { Title } from "../../../common/Title";
import { Loader } from "../../../common/Loader";
import { ErrorPage } from "../../../common/ErrorPage";
import { MovieTile } from "../../../common/MovieTile";
import { APIImageUrl } from "../../APIdata";
import searchQueryParamName from "../../../common/Search/searchQueryParamName";
import { NoResultsPage } from "../../../common/NoResultsPage";
import { useQueryParameter } from "../../../common/Search/queryParameterHooks";
import { nanoid } from "@reduxjs/toolkit";

export const MovieList = () => {
  const dispatch = useDispatch();
  const query = useQueryParameter(searchQueryParamName);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch, query]);

  const genresTable = useSelector(selectGenres);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const movies = useSelector((state) => selectMovieByQuery(state, query));

  return (
      <Section>
        {query && movies.length === 0
          ? <NoResultsPage query={query}/>
          : loading
              ? <>
                  <Title>
                      {query
                        ? `Search results for "${query[0].toUpperCase() + query.slice(1)}"`
                        : "Popular movies"}
                  </Title>
                  <Loader />
                </>
              : error
                  ? <ErrorPage />
                  : <>
                      <Title>
                        {query
                          ? `Search results for "${query[0].toUpperCase() + query.slice(1)}" (${movies.length})`
                          : "Popular movies"}
                      </Title>
                      <Wrapper>
                        {movies.map((movie) => (
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
                        ))}
                      </Wrapper>
                    </>
        }
      </Section>
  );
};
