import { delay, call, put, takeLatest } from "redux-saga/effects";
import { APIPopularPeopleUrl, APISearchPersonUrl } from "../../APIdata";
import { getAPI } from "../../getAPI";
import {
  fetchPeople,
  fetchPeopleError,
  fetchPeopleSuccess
} from "./popularPeopleSlice";

function* fetchPopularPeopleWorker( { payload: { query } }) {
  const popularPeople = `${APIPopularPeopleUrl}&page=1`;
  const searchPerson = `${APISearchPersonUrl}&query=${query}`;
  const request = !query ? popularPeople : searchPerson;

  try {
    yield delay(1000);
    const requestPeople = yield call(getAPI, request);
    console.log(requestPeople);
    yield put(fetchPeopleSuccess(requestPeople));
  } catch (error) {
    yield put(fetchPeopleError());
  }
}

export function* watchFetchPopularPeople() {
  yield takeLatest(fetchPeople.type, fetchPopularPeopleWorker);
}
