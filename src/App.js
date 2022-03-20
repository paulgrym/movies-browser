import { Header } from "./common/Header";
import { MovieList } from "./features/movies/MovieList";
import { MovieDetails } from "./features/movies/MovieDetails";
import { PersonList } from "./features/people/PersonList";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path="/movies/:id">
          <MovieDetails />
        </Route>
        <Route path="/movies">
          <MovieList />
        </Route>
        <Route path="/people">
          <PersonList />
        </Route>
        <Route path="/">
          <Redirect to="/movies" />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
