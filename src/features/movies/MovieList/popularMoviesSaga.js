import { delay, call, put, takeLatest } from "redux-saga/effects";
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
} from "./popularMoviesSlice";

function* fetchPopularMoviesWorker({ payload: { query, page } }) {
  const popularMoviesPage1 = `${APIPopularMoviesUrl}&page=${page}`;
  const searchMovie = `${APISearchMovieUrl}&query=${query}&page=${page}`;
  const urlPath = !query ? popularMoviesPage1 : searchMovie;

  try {
    yield delay(500);
    const requestMovies = yield call(getAPI, urlPath);    
    const genres = yield call(getAPI, APIgenresUrl);
    yield put(fetchMoviesSuccess(requestMovies));
    console.log(requestMovies);
    yield put(setGenres(genres));
  } catch (error) {
    yield put(fetchMoviesError());
  }
}

export function* watchFetchPopularMovies() {
  yield takeLatest(fetchMovies.type, fetchPopularMoviesWorker);
}
