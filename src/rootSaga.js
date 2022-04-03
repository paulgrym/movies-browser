import { all } from "redux-saga/effects";
import { watchFetchMovies } from "./features/movies/MovieList/moviesSaga";
import { watchFetchPeople } from "./features/people/PersonList/peopleSaga";
import { watchMovieDetails } from "./features/movies/MovieDetails/movieDetailsSaga";
import { watchPersonDetails } from "./features/people/PersonDetails/personDetailsSaga";

export default function* rootSaga() {
  yield all([
    watchFetchMovies(),
    watchFetchPeople(),
    watchMovieDetails(),
    watchPersonDetails(),
  ]);
};
