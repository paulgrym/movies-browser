import { delay, debounce, call, put, takeLatest } from "redux-saga/effects";
import { APIpopularPeopleUrl, APIsearchPersonUrl } from "../../APIdata";
import { getAPI } from "../../getAPI";
import {
  fetchPeople,
  fetchPeopleError,
  fetchPeopleSearch,
  fetchPeopleSuccess
} from "./popularPeopleSlice";

function* fetchPopularPeopleWorker({ payload: { query, page } }) {
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

export function* watchFetchPopularPeople() {
  yield debounce(2000, fetchPeopleSearch.type, fetchPopularPeopleWorker);
  yield takeLatest(fetchPeople.type, fetchPopularPeopleWorker);
};