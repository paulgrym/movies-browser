import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { movieDetailsReducer } from "./features/movies/MovieDetails/movieDetailsSlice";
import { popularMoviesReducer } from "./features/movies/MovieList/popularMoviesSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    popularMovies: popularMoviesReducer,
    movieDetails: movieDetailsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;