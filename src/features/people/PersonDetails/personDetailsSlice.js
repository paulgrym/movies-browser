import { createSlice } from "@reduxjs/toolkit";

const personDetailsSlice = createSlice({
  name: "personDetails",
  initialState: {
    personDetails: [],
    cast: [],
    crew: [],
    loading: false,
    error: false,
  },

  reducers: {
    fetchPersonDetails: state => {
      state.loading = true;
      state.error = false;
    },

    fetchPersonDetailsSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.personDetails = payload;
    },

    fetchPersonDetailsError: state => {
      state.error = true;
      state.loading = false;
    },

    setMovies: (state, { payload }) => {
      state.cast = payload.cast;
      state.crew = payload.crew;
    },
  },
});

export const {
  fetchPersonDetails,
  fetchPersonDetailsSuccess,
  fetchPersonDetailsError,
  setMovies,
} = personDetailsSlice.actions;

const selectPersonDetails = state => state.personDetails;

export const selectPerson = state => selectPersonDetails(state).personDetails;
export const selectMovieCast = state => selectPersonDetails(state).cast;
export const selectMovieCrew = state => selectPersonDetails(state).crew;
export const selectLoading = state => selectPersonDetails(state).loading;
export const selectError = state => selectPersonDetails(state).error;

export const personDetailsReducer = personDetailsSlice.reducer;
