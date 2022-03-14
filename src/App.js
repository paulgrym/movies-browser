import { Header } from "./common/Header";
import { NoResultsPage } from "./common/NoResultsPage";
import { MovieList } from "./features/movies/MovieList";
import { MovieDetails } from "./features/movies/MovieDetails";
import { PersonList } from "./features/people/PersonList";

function App() {
  return (
    <>
      <Header />
      {/* <MovieList /> */}
      <MovieDetails />
      {/* <PersonList /> */}
      {/* <NoResultsPage /> */}
    </>
  );
};

export default App;
