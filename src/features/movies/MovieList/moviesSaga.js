import { debounce, delay, call, put, takeLatest } from "redux-saga/effects";
import {
  popularMoviesUrl,
  searchMovieUrl,
} from "../../APIdata";
import { getAPI } from "../../getAPI";
import {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesError,
  fetchMoviesSearch,
} from "./moviesSlice";

function* fetchMoviesWorker({ payload: { query, page } }) {
  const popularMovies = popularMoviesUrl(page);
  const searchMovie = searchMovieUrl(query, page);
  const urlPath = !query ? popularMovies : searchMovie;

  try {
    if (!query) { yield delay(300) };
    const requestMovies = yield call(getAPI, urlPath);
    yield put(fetchMoviesSuccess(requestMovies));
  } catch (error) {
    yield put(fetchMoviesError());
  }
};

export function* watchFetchMovies() {
  yield debounce(500, fetchMoviesSearch.type, fetchMoviesWorker);
  yield takeLatest(fetchMovies.type, fetchMoviesWorker);
};
