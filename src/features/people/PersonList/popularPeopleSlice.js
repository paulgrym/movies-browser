import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "popularPeople",
  initialState: {
    people: [],
    loading: false,
    error: false,
  },

  reducers: {
    fetchPeople: (state) => {
      state.loading = true;
    },

    fetchPeopleSuccess: (state, { payload: people }) => {
      state.loading = false;
      state.error = false
      state.people = people.results;
    },

    fetchPeopleError: (state) => {
      state.error = true;
    },
  },
});

export const {
  fetchPeople,
  fetchPeopleSuccess,
  fetchPeopleError,
} = peopleSlice.actions;

export const selectPopularPeople = (state) => state.popularPeople;

export const selectPeople = state => selectPopularPeople(state).people;
export const selectLoading = state => selectPopularPeople(state).loading;
export const selectError = state => selectPopularPeople(state).error;

export const popularPeopleReducer = peopleSlice.reducer;
