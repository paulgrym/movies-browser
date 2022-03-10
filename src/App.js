import { Header } from "./common/Header";
import { NoResultsPage } from "./common/NoResultsPage";
import { Section } from "./common/Section";
import { MovieList } from "./features/movies/MovieList";

function App() {
  return (
    <>
      <Header />
      {/* <Section
        title={"Popular movies"}
        body={<MovieList />}
      /> */}
      <NoResultsPage />
    </>
  );
}

export default App;
