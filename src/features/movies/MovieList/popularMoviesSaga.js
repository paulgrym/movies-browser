import { delay, call, put, takeLatest } from "redux-saga/effects";
import { APIgenresUrl, APIPopularMoviesUrl } from "../../APIdata";
import { getAPI } from "../../getAPI";
import { fetchMoviesError, fetchMovies, fetchMoviesSuccess, setGenres } from "./popularMoviesSlice";

function* fetchPopularMoviesWorker() {
  const popularMoviesPage1 = `${APIPopularMoviesUrl}&page=1`;

  try {
    yield delay(1000);
    const popularMovies = yield call(getAPI, popularMoviesPage1);
    const genres = yield call(getAPI, APIgenresUrl);
    yield put(fetchMoviesSuccess(popularMovies));
    yield put(setGenres(genres));
    console.log(popularMovies);
  } catch (error) {
    yield put(fetchMoviesError());
  };
};

export function* watchFetchPopularMovies() {
  yield takeLatest(fetchMovies.type, fetchPopularMoviesWorker);
};
