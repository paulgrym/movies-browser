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

function* fetchPopularMoviesWorker({ payload: { query } }) {
  const popularMoviesPage1 = `${APIPopularMoviesUrl}&page=1`;
  const searchMovieByQuery = `${APISearchMovieUrl}${query}`;

  try {
    yield delay(1000);
    const request = yield call(
      getAPI,
      !query 
        ? popularMoviesPage1 
        : searchMovieByQuery
    );    
    const genres = yield call(getAPI, APIgenresUrl);
    yield put(fetchMoviesSuccess(request));
    yield put(setGenres(genres));
  } catch (error) {
    yield put(fetchMoviesError);
  }
}

export function* watchFetchPopularMovies() {
  yield takeLatest(fetchMovies.type, fetchPopularMoviesWorker);
}
