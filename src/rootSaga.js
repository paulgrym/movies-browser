import { all } from "redux-saga/effects";
import { watchMovieDetails } from "./features/movies/MovieDetails/movieDetailsSaga";
import { watchFetchPopularMovies } from "./features/movies/MovieList/popularMoviesSaga";

export default function* rootSaga() {
  yield all([
    watchFetchPopularMovies(),
    watchMovieDetails(),
  ]);
};
