import { Header } from "./common/Header";
import { Loader } from "./common/Loader";
import { NoResultsPage } from "./common/NoResultsPage";
import { MovieList } from "./features/movies/MovieList";
import { PersonList } from "./features/people/PersonList";

function App() {
  return (
    <>
      <Header />
      <MovieList />
      {/* <PersonList /> */}
      {/* <NoResultsPage /> */}
    </>
  );
};

export default App;
