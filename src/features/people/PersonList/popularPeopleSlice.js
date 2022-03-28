import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "popularPeople",
  initialState: {
    people: [],
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
      state.people = people.results;
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

export const selectPopularPeople = (state) => state.popularPeople;

export const selectPeople = state => selectPopularPeople(state).people;
export const selectTotalResults = state => selectPopularPeople(state).totalResults;
export const selectLoading = state => selectPopularPeople(state).loading;
export const selectError = state => selectPopularPeople(state).error;

export const popularPeopleReducer = peopleSlice.reducer;
