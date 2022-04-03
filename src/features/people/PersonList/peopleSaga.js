import { delay, debounce, call, put, takeLatest } from "redux-saga/effects";
import { APIpopularPeopleUrl, APIsearchPersonUrl } from "../../APIdata";
import { getAPI } from "../../getAPI";
import {
  fetchPeople,
  fetchPeopleError,
  fetchPeopleSearch,
  fetchPeopleSuccess
} from "./peopleSlice";

function* fetchPeopleWorker({ payload: { query, page } }) {
  const popularPeople = APIpopularPeopleUrl(page);
  const searchPerson = APIsearchPersonUrl(query, page);
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
  yield debounce(2000, fetchPeopleSearch.type, fetchPeopleWorker);
  yield takeLatest(fetchPeople.type, fetchPeopleWorker);
};