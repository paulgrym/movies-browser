import { delay, call, put, takeLatest, all } from "redux-saga/effects";
import { APImovieCreditsUrl, APImovieDetailsUrl } from "../../APIdata";
import { getAPI } from "../../getAPI";
import {
  fetchMovieDetails,
  fetchMovieDetailsError,
  fetchMovieDetailsSuccess,
  setMoviePeople
} from "./movieDetailsSlice";

function* fetchMovieDetailsWorker({ payload: movieId }) {
  const movieDetailsUrl = APImovieDetailsUrl(movieId);
  const movieCreditsUrl = APImovieCreditsUrl(movieId);

  try {
    yield delay(300);
    const [movieDetails, moviePeople] = yield all([
      call(getAPI, movieDetailsUrl),
      call(getAPI, movieCreditsUrl)
    ]);
    yield put(fetchMovieDetailsSuccess(movieDetails));
    yield put(setMoviePeople(moviePeople));
  } catch (error) {
    yield put(fetchMovieDetailsError());
  };
};

export function* watchMovieDetails() {
  yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsWorker);
};
