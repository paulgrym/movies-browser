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
      state.loading = false;
      state.error = true;
    },
  },
});

export const { 
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesError,
  setGenres } = moviesSlice.actions;

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

export const selectMovieByQuery = (state, query) => {
  const queryMovies = selectMovies(state);

  if (!query || query.trim() === "") {
    return queryMovies;
  }

  return queryMovies.filter(({ title }) =>
    title.toUpperCase().includes(query.trim().toUpperCase())
  );
};

export const popularMoviesReducer = moviesSlice.reducer;
