import { all } from "redux-saga/effects";
import { watchFetchPopularMovies } from "./features/movies/MovieList/popularMoviesSaga";
import { watchFetchPopularPeople } from "./features/people/PersonList/popularPeopleSaga";
import { watchMovieDetails } from "./features/movies/MovieDetails/movieDetailsSaga";
import { watchPersonDetails } from "./features/people/PersonDetails/personDetailsSaga";

export default function* rootSaga() {
  yield all([
    watchFetchPopularMovies(),
    watchFetchPopularPeople(),
    watchMovieDetails(),
    watchPersonDetails(),
  ]);
};
