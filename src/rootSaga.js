import { all } from "redux-saga/effects";
import { watchFetchPopularMovies } from "./features/popularMoviesSaga";

export default function* rootSaga() {
  yield all([watchFetchPopularMovies()]);
};
