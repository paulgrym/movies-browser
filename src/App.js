import { Header } from "./common/Header";
import { Section } from "./common/Section";
import { MovieList } from "./features/movies/MovieList";

function App() {
  return (
    <>
      <Header />
      <Section
        title={"Popular movies"}
        body={<MovieList />}
      />
    </>
  );
}

export default App;
