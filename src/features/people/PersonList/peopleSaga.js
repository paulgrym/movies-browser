import { delay, debounce, call, put, takeLatest } from "redux-saga/effects";
import { popularPeopleUrl, searchPersonUrl } from "../../APIdata";
import { getAPI } from "../../getAPI";
import {
  fetchPeople,
  fetchPeopleError,
  fetchPeopleSearch,
  fetchPeopleSuccess
} from "./peopleSlice";

function* fetchPeopleWorker({ payload: { query, page } }) {
  const popularPeople = popularPeopleUrl(page);
  const searchPerson = searchPersonUrl(query, page);
  const urlPath = !query ? popularPeople : searchPerson;

  try {
    if (!query) { yield delay(300) };
    const requestPeople = yield call(getAPI, urlPath);
    yield put(fetchPeopleSuccess(requestPeople));
  } catch (error) {
    yield put(fetchPeopleError());
  }
};

export function* watchFetchPeople() {
  yield debounce(500, fetchPeopleSearch.type, fetchPeopleWorker);
  yield takeLatest(fetchPeople.type, fetchPeopleWorker);
};