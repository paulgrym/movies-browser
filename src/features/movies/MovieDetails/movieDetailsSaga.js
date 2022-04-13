import { delay, call, put, takeLatest, all } from "redux-saga/effects";
import { movieCreditsUrl, movieDetailsUrl } from "../../APIdata";
import { getAPI } from "../../getAPI";
import {
  fetchMovieDetails,
  fetchMovieDetailsError,
  fetchMovieDetailsSuccess,
  setMoviePeople
} from "./movieDetailsSlice";

function* fetchMovieDetailsWorker({ payload: movieId }) {
  const detailsUrl = movieDetailsUrl(movieId);
  const creditsUrl = movieCreditsUrl(movieId);

  try {
    yield delay(300);
    const [movieDetails, moviePeople] = yield all([
      call(getAPI, detailsUrl),
      call(getAPI, creditsUrl)
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
