import { delay, call, put, takeLatest } from "redux-saga/effects";
import { getPopularMovies } from "./popularMoviesAPI";
import { fetchMoviesError, fetchMovies, fetchMoviesSuccess } from "./popularMoviesSlice";

function* fetchPopularMoviesWorker() {
  try {
    yield delay(2000);
    const popularMovies = yield call(getPopularMovies);
    yield put(fetchMoviesSuccess(popularMovies));
  } catch (error) {
    yield put(fetchMoviesError());
  };
};

export function* watchFetchPopularMovies() {
  yield takeLatest(fetchMovies.type, fetchPopularMoviesWorker);
};
