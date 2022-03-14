import { delay, call, put, takeLatest } from "redux-saga/effects";
import { APIPopularMoviesUrl } from "../../APIdata";
import { getAPI } from "../../getAPI";
import { fetchMovieDetails, fetchMovieDetailsError, fetchMovieDetailsSuccess } from "./movieDetailsSlice";

function* fetchMovieDetailsWorker() {
  const movies2 = `${APIPopularMoviesUrl}&page=1`;

  try {
    yield delay(2000);
    const movieDetails = yield call(getAPI, movies2);
    yield put(fetchMovieDetailsSuccess(movieDetails));
  } catch (error) {
    yield put(fetchMovieDetailsError());
  };
};

export function* watchMovieDetails() {
  yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsWorker);
};
