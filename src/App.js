import { Header } from "./common/Header";
import { MovieList } from "./features/movies/MovieList";
import { MovieDetails } from "./features/movies/MovieDetails";
import { PersonList } from "./features/people/PersonList";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { PersonDetails } from "./features/people/PersonDetails";
import { toMovie, toMovies, toPeople, toPerson } from "./routes";
import { fetchGenres } from "./features/genresSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path={toMovie()}>
          <MovieDetails />
        </Route>
        <Route path={toMovies()}>
          <MovieList />
        </Route>
        <Route path={toPerson()}>
          <PersonDetails />
        </Route>
        <Route path={toPeople()}>
          <PersonList />
        </Route>
        <Route path="/">
          <Redirect to={toMovies()} />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
