import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  selectError,
  selectLoading,
  selectGenres,
  selectMovies,
  selectTotalResults,
  // selectPage,
} from "./popularMoviesSlice";
import { Section } from "../../../common/Section";
import { MovieWrapper } from "../../../common/MovieWrapper";
import { Title } from "../../../common/Title";
import { Loader } from "../../../common/Loader";
import { ErrorPage } from "../../../common/ErrorPage";
import { MovieTile } from "../../../common/MovieTile";
import { APIImageUrl } from "../../APIdata";
import searchQueryParamName from "../../../common/Search/searchQueryParamName";
import { NoResultsPage } from "../../../common/NoResultsPage";
import { useQueryParameter } from "../../../common/Search/queryParameterHooks";
import { nanoid } from "@reduxjs/toolkit";
import { capitalize } from "../../capitalize";

export const MovieList = () => {
  const dispatch = useDispatch();
  const query = useQueryParameter(searchQueryParamName);
  // const page = useQueryParameter("page");
  const genresTable = useSelector(selectGenres);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const movies = useSelector(selectMovies);
  const totalResults = useSelector(selectTotalResults);
  
  useEffect(() => {
    dispatch(fetchMovies({ query }));
  }, [dispatch, query]);
  
  return (
      <>
      {query && totalResults === 0
          ? <NoResultsPage query={query}/>
          : error 
            ? <ErrorPage />
            :
          <Section>
          {loading
              ? <>
                  <Title>
                      {query
                        ? `Search results for "${capitalize(query)}"`
                        : "Popular movies"}
                  </Title>
                  <Loader />
                </>
              : error
                  ? <ErrorPage />
                  : <>
                      <Title>
                        {query
                          ? `Search results for "${query[0].toUpperCase() + query.slice(1)}" (${totalResults})`
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
                        </>
}
                        </Section>
                      }
                      </>
        
                    );
};
