import { useState, useEffect } from "react";

export const usePopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState({ state: "loading" });

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const APIUrl = `https://api.themoviedb.org/3/movie/popular?api_key=951446c9e47a99cb6ccfb776c60023c7&language=en-US&page=1`;

        const response = await fetch(APIUrl);
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = await response.json();
        console.log(data);

        setPopularMovies({
          data: data.results,
          state: "success"
        });

      } catch (error) {
        console.error("Sth bad happened", error);
        setPopularMovies({ state: "error" });
      }
    }
    setTimeout(getPopularMovies, 0);
  }, []);

  return popularMovies;
}
