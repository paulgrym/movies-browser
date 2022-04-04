import { delay, call, put, takeLatest, all } from "redux-saga/effects";
import { APIpersonCreditsUrl, APIpersonDetailsUrl } from "../../APIdata";
import { getAPI } from "../../getAPI";
import {
  fetchPersonDetails,
  fetchPersonDetailsError,
  fetchPersonDetailsSuccess,
  setMovies
} from "./personDetailsSlice";

function* fetchPersonDetailsWorker({ payload: personId }) {
  const personDetailsUrl = APIpersonDetailsUrl(personId);
  const personCreditsUrl = APIpersonCreditsUrl(personId);

  try {
    yield delay(300);
    const [personDetails, personCredit] = yield all([
      call(getAPI, personDetailsUrl),
      call(getAPI, personCreditsUrl)
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
