import { delay, call, put, takeLatest } from "redux-saga/effects";
import { APIPopularPeopleUrl } from "../../APIdata";
import { getAPI } from "../../getAPI";
import { fetchPeople, fetchPeopleError, fetchPeopleSuccess } from "./popularPeopleSlice";

function* fetchPopularPeopleWorker() {
  const popularPeoplePage1 = `${APIPopularPeopleUrl}&page=1`;

  try {
    yield delay(2000);
    const popularPeople = yield call(getAPI, popularPeoplePage1);
    yield put(fetchPeopleSuccess(popularPeople));
  } catch (error) {
    yield put(fetchPeopleError());
  };
};

export function* watchFetchPopularPeople() {
  yield takeLatest(fetchPeople.type, fetchPopularPeopleWorker);
};
