import { all } from "redux-saga/effects";
import { watchFetchMovies } from "./features/movies/MovieList/moviesSaga";
import { watchFetchPopularPeople } from "./features/people/PersonList/popularPeopleSaga";
import { watchMovieDetails } from "./features/movies/MovieDetails/movieDetailsSaga";
import { watchPersonDetails } from "./features/people/PersonDetails/personDetailsSaga";

export default function* rootSaga() {
  yield all([
    watchFetchMovies(),
    watchFetchPopularPeople(),
    watchMovieDetails(),
    watchPersonDetails(),
  ]);
};
