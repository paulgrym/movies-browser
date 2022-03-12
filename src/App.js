import { Header } from "./common/Header";
import { LoadingPage } from "./common/LoadingPage";
import { NoResultsPage } from "./common/NoResultsPage";
import { MovieList } from "./features/movies/MovieList";

function App() {
  return (
    <>
      <Header />
      <MovieList />
      {/* <NoResultsPage /> */}
      {/* <LoadingPage /> */}
    </>
  );
};

export default App;
