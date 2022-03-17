import { delay, call, put, takeLatest } from "redux-saga/effects";
import { APIMovieDetailsUrl } from "../../APIdata";
import { getAPI } from "../../getAPI";
import { fetchMovieDetails, fetchMovieDetailsError, fetchMovieDetailsSuccess } from "./movieDetailsSlice";

function* fetchMovieDetailsWorker() {
  try {
    yield delay(1000);
    const movieDetails = yield call(getAPI, APIMovieDetailsUrl);
    yield put(fetchMovieDetailsSuccess(movieDetails));
    console.log(movieDetails);
  } catch (error) {
    yield put(fetchMovieDetailsError());
  };
};

export function* watchMovieDetails() {
  yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsWorker);
};
