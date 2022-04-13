import { delay, call, put, takeLatest, all } from "redux-saga/effects";
import { personCreditsUrl, personDetailsUrl } from "../../APIdata";
import { getAPI } from "../../getAPI";
import {
  fetchPersonDetails,
  fetchPersonDetailsError,
  fetchPersonDetailsSuccess,
  setMovies
} from "./personDetailsSlice";

function* fetchPersonDetailsWorker({ payload: personId }) {
  const detailsUrl = personDetailsUrl(personId);
  const creditsUrl = personCreditsUrl(personId);

  try {
    yield delay(300);
    const [personDetails, personCredit] = yield all([
      call(getAPI, detailsUrl),
      call(getAPI, creditsUrl)
    ]);
    yield put(fetchPersonDetailsSuccess(personDetails));
    yield put(setMovies(personCredit));
  } catch (error) {
    yield put(fetchPersonDetailsError());
  };
};

export function* watchPersonDetails() {
  yield takeLatest(fetchPersonDetails.type, fetchPersonDetailsWorker);
};
