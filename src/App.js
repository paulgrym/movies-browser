import { Header } from "./common/Header";
// import { NoResultsPage } from "./common/NoResultsPage";
import { MovieList } from "./features/movies/MovieList";
import { MovieDetails } from "./features/movies/MovieDetails";
import { PersonList } from "./features/people/PersonList";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { PersonDetails } from "./features/people/PersonDetails";

function App() {
  return (
    <HashRouter>
      <Header />
      {/* <NoResultsPage /> */}
      <Switch>
        <Route path="/movies/:id">
          <MovieDetails />
        </Route>
        <Route path="/movies">
          <MovieList />
        </Route>
        <Route path="/people/:id">
          <PersonDetails />
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
