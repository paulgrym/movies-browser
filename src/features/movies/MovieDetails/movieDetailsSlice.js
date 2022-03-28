import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
    movieDetails: [],
    cast: [],
    crew: [],
    loading: false,
    error: false,
  },

  reducers: {
    fetchMovieDetails: (state) => {
      state.loading = true;
      state.error = false;
    },

    fetchMovieDetailsSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.movieDetails = payload;
    },

    fetchMovieDetailsError: (state) => {
      state.loading = false;
      state.error = true;
    },

    setMoviePeople: (state, { payload }) => {
      state.cast = payload.cast;
      state.crew = payload.crew;
    },
  },
});

export const {
  fetchMovieDetails,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsError,
  setMoviePeople,
} = movieDetailsSlice.actions;

const selectMovieDetails = (state) => state.movieDetails;

export const selectMovie = state => selectMovieDetails(state).movieDetails;
export const selectMovieCast = state => selectMovieDetails(state).cast;
export const selectMovieCrew = state => selectMovieDetails(state).crew;
export const selectLoading = state => selectMovieDetails(state).loading;
export const selectError = state => selectMovieDetails(state).error;

export const movieDetailsReducer = movieDetailsSlice.reducer;
