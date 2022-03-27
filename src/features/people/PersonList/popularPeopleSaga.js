import { delay, call, put, takeLatest } from "redux-saga/effects";
import { APIPopularPeopleUrl, APISearchPersonUrl } from "../../APIdata";
import { getAPI } from "../../getAPI";
import {
  fetchPeople,
  fetchPeopleError,
  fetchPeopleSuccess
} from "./popularPeopleSlice";

function* fetchPopularPeopleWorker( { payload: { query, page } }) {
  const popularPeople = `${APIPopularPeopleUrl}&page=${page}`;
  const searchPerson = `${APISearchPersonUrl}&query=${query}&page=${page}`;
  const urlPath = !query ? popularPeople : searchPerson;

  try {
    yield delay(2000);
    const requestPeople = yield call(getAPI, urlPath);
    yield put(fetchPeopleSuccess(requestPeople));
  } catch (error) {
    yield put(fetchPeopleError());
  }
}

export function* watchFetchPopularPeople() {
  yield takeLatest(fetchPeople.type, fetchPopularPeopleWorker);
}
