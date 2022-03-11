import { useState, useEffect } from "react";

export const usePopularPeople = () => {
  const [popularPeople, setPopularPeople] = useState({ state: "loading" });

  const APIUrl = `https://api.themoviedb.org/3/person/popular?api_key=17ccd8ea2a2ffd73e2e1a89cad7c4f38&language=en-US&page=1`;

  useEffect(() => {
    const getPopularPeople = async () => {
      try {
        const response = await fetch(APIUrl);
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = await response.json();

        setPopularPeople({
          data: data.results,
          state: "success",
        });

      } catch (error) {
        console.error("Something went wrong:(", error);
        setPopularPeople({ state: "error" });
      }
    }
    setTimeout(getPopularPeople, 0);
  }, []);

  return popularPeople;
}
