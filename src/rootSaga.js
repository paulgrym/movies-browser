import { all } from "redux-saga/effects";
import { watchFetchPopularMovies } from "./features/movies/MovieList/popularMoviesSaga";
import { watchFetchPopularPeople } from "./features/people/PersonList/popularPeopleSaga";

export default function* rootSaga() {
  yield all([
    watchFetchPopularMovies(),
    watchFetchPopularPeople(),
  ]);
};
