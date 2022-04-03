import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    page: null,
    moviesList: [],
    totalPages: null,
    totalResults: null,
    loading: false,
    error: false,
  },

  reducers: {
    fetchMovies: (state) => {
      state.loading = true;
      state.error = false;
    },

    fetchMoviesSearch: (state) => {
      state.loading = true;
      state.error = false;
    },

    fetchMoviesSuccess: (state, { payload: movies }) => {
      state.loading = false;
      state.error = false;
      state.page = movies.page;
      state.moviesList = movies.results;
      state.totalPages = movies.total_pages;
      state.totalResults = movies.total_results;
    },

    fetchMoviesError: (state) => {
      state.loading = false;
      state.error = true;
      state.loading = false;
    },
  },
});

export const {
  fetchMovies,
  fetchMoviesSearch,
  fetchMoviesSuccess,
  fetchMoviesError,
} = moviesSlice.actions;

const selectMovies = (state) => state.movies;

export const selectMoviesList = (state) => selectMovies(state).moviesList;
export const selectPage = (state) => selectMovies(state).page;
export const selectTotalPages = (state) =>
  selectMovies(state).totalPages;
export const selectTotalResults = (state) =>
  selectMovies(state).totalResults;
export const selectLoading = (state) => selectMovies(state).loading;
export const selectError = (state) => selectMovies(state).error;

export const moviesReducer = moviesSlice.reducer;
