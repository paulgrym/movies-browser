import { all } from "redux-saga/effects";
import { watchFetchPopularMovies } from "./features/movies/MovieList/popularMoviesSaga";
import { watchFetchPopularPeople } from "./features/people/PersonList/popularPeopleSaga";
import { watchMovieDetails } from "./features/movies/MovieDetails/movieDetailsSaga";

export default function* rootSaga() {
  yield all([
    watchFetchPopularMovies(),
    watchFetchPopularPeople(),
    watchMovieDetails(),
  ]);
};
