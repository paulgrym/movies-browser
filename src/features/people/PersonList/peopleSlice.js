import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    peopleList: [],
    totalPages: null,
    totalResults: null,
    loading: false,
    error: false,
  },

  reducers: {
    fetchPeople: (state) => {
      state.loading = true;
      state.error = false;
    },

    fetchPeopleSearch: (state) => {
      state.loading = true;
      state.error = false;
    },

    fetchPeopleSuccess: (state, { payload: people }) => {
      state.loading = false;
      state.peopleList = people.results;
      state.totalPages = people.total_pages;
      state.totalResults = people.total_results;
    },

    fetchPeopleError: (state) => {
      state.loading = false;
      state.error = true;
      state.loading = false;
    },
  },
});

export const {
  fetchPeople,
  fetchPeopleSearch,
  fetchPeopleSuccess,
  fetchPeopleError,
} = peopleSlice.actions;

export const selectPeople = (state) => state.people;

export const selectPeopleList = state => selectPeople(state).peopleList;
export const selectTotalResults = state => selectPeople(state).totalResults;
export const selectTotalPages = state => selectPeople(state).totalPages;
export const selectLoading = state => selectPeople(state).loading;
export const selectError = state => selectPeople(state).error;

export const peopleReducer = peopleSlice.reducer;