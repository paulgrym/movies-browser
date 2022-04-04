import { delay, call, put, takeLatest, } from "redux-saga/effects";
import { APIgenresUrl } from "./APIdata";
import { fetchGenres, fetchGenresError, fetchGenresSuccess } from "./genresSlice";
import { getAPI } from "./getAPI";

function* fetchGenresWorker() {
  try {
    yield delay(300);
    const genres = yield call(getAPI, APIgenresUrl);
    yield put(fetchGenresSuccess(genres));
  } catch (error) {
    yield put(fetchGenresError());
  }
};

export function* watchFetchGenres() {
  yield takeLatest(fetchGenres.type, fetchGenresWorker);
};
