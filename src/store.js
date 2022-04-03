import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { moviesReducer } from "./features/movies/MovieList/moviesSlice";
import { peopleReducer } from "./features/people/PersonList/peopleSlice";
import { movieDetailsReducer } from "./features/movies/MovieDetails/movieDetailsSlice";
import { personDetailsReducer } from "./features/people/PersonDetails/personDetailsSlice";
import rootSaga from "./rootSaga";


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    people: peopleReducer,
    movieDetails: movieDetailsReducer,
    personDetails: personDetailsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;