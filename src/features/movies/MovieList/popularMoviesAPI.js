import { APIPopularMoviesUrl } from "../../APIdata"

export const getPopularMovies = async () => {
    const APIUrl = `${APIPopularMoviesUrl}&page=499`;

    const response = await fetch(APIUrl);

    const popularMovies = await response.json();

    return popularMovies;
}