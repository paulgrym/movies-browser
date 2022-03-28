import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "popularMovies",
  initialState: {
    page: null,
    movies: [],
    genres: [],
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

    setGenres: (state, { payload: genres }) => {
      state.genres = genres.genres;
    },

    fetchMoviesSuccess: (state, { payload: movies }) => {
      state.loading = false;
      state.error = false;
      state.page = movies.page;
      state.movies = movies.results;
      state.totalPages = movies.total_pages;
      state.totalResults = movies.total_results;
    },

    fetchMoviesError: (state) => {
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
  setGenres,
} = moviesSlice.actions;

const selectPopularMovies = (state) => state.popularMovies;

export const selectMovies = (state) => selectPopularMovies(state).movies;
export const selectPage = (state) => selectPopularMovies(state).page;
export const selectGenres = (state) => selectPopularMovies(state).genres;
export const selectTotalPages = (state) =>
  selectPopularMovies(state).totalPages;
export const selectTotalResults = (state) =>
  selectPopularMovies(state).totalResults;
export const selectLoading = (state) => selectPopularMovies(state).loading;
export const selectError = (state) => selectPopularMovies(state).error;

export const popularMoviesReducer = moviesSlice.reducer;
