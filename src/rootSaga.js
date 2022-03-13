import { all } from "redux-saga/effects";
import { watchFetchPopularMovies } from "./features/movies/MovieList/popularMoviesSaga";

export default function* rootSaga() {
  yield all([watchFetchPopularMovies()]);
};
