import { Header } from "./common/Header";
import { NoResultsPage } from "./common/NoResultsPage";
import { MovieList } from "./features/movies/MovieList";

function App() {
  return (
    <>
      <Header />
      <MovieList />
      {/* <NoResultsPage /> */}
    </>
  );
}

export default App;
