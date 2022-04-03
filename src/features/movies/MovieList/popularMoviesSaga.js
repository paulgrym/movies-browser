import { debounce, delay, call, put, takeLatest, all } from "redux-saga/effects";
import {
  APIgenresUrl,
  APIPopularMoviesUrl,
  APISearchMovieUrl,
} from "../../APIdata";
import { getAPI } from "../../getAPI";
import {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesError,
  setGenres,
  fetchMoviesSearch,
} from "./popularMoviesSlice";

function* fetchPopularMoviesWorker({ payload: { query, page } }) {
  const popularMovies = `${APIPopularMoviesUrl}&page=${page}`;
  const searchMovie = `${APISearchMovieUrl}&query=${query}&page=${page}`;
  const urlPath = !query ? popularMovies : searchMovie;

  try {
    if (!query) { yield delay(300) };
    const [requestMovies, genres] = yield all([
      call(getAPI, urlPath),
      call(getAPI, APIgenresUrl)
    ]);
    yield put(fetchMoviesSuccess(requestMovies));
    yield put(setGenres(genres));
  } catch (error) {
    yield put(fetchMoviesError());
  }
};

export function* watchFetchPopularMovies() {
  yield debounce(2000, fetchMoviesSearch.type, fetchPopularMoviesWorker);
  yield takeLatest(fetchMovies.type, fetchPopularMoviesWorker);
};
