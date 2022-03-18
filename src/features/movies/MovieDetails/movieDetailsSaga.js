import { delay, call, put, takeLatest } from "redux-saga/effects";
import { APIKey, APIUrl } from "../../APIdata";
import { getAPI } from "../../getAPI";
import {
  fetchMovieDetails,
  fetchMovieDetailsError,
  fetchMovieDetailsSuccess,
  setMoviePeople
} from "./movieDetailsSlice";

function* fetchMovieDetailsWorker({ payload: movieId }) {
  const APIMovieDetailsUrl = `${APIUrl}/movie/${movieId}?api_key=${APIKey}`
  const APIMovieCreditsUrl = `${APIUrl}/movie/${movieId}/credits?api_key=${APIKey}`

  try {
    yield delay(1000);
    const movieDetails = yield call(getAPI, APIMovieDetailsUrl);
    const moviePeople = yield call(getAPI, APIMovieCreditsUrl);
    yield put(fetchMovieDetailsSuccess(movieDetails));
    yield put(setMoviePeople(moviePeople));
  } catch (error) {
    yield put(fetchMovieDetailsError());
  };
};

export function* watchMovieDetails() {
  yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsWorker);
};
