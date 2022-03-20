import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { popularMoviesReducer } from "./features/movies/MovieList/popularMoviesSlice";
import { popularPeopleReducer } from "./features/people/PersonList/popularPeopleSlice";
import { movieDetailsReducer } from "./features/movies/MovieDetails/movieDetailsSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    popularMovies: popularMoviesReducer,
    popularPeople: popularPeopleReducer,
    movieDetails: movieDetailsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;