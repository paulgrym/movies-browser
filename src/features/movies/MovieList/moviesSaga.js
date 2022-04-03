import { debounce, delay, call, put, takeLatest, all } from "redux-saga/effects";
import {
  APIgenresUrl,
  APIpopularMoviesUrl,
  APIsearchMovieUrl,
} from "../../APIdata";
import { getAPI } from "../../getAPI";
import {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesError,
  setGenres,
  fetchMoviesSearch,
} from "./moviesSlice";

function* fetchMoviesWorker({ payload: { query, page } }) {
  const popularMovies = APIpopularMoviesUrl(page);
  const searchMovie = APIsearchMovieUrl(query, page);
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

export function* watchFetchMovies() {
  yield debounce(2000, fetchMoviesSearch.type, fetchMoviesWorker);
  yield takeLatest(fetchMovies.type, fetchMoviesWorker);
};
