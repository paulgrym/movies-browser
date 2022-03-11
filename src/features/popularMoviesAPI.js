export const getPopularMovies = async () => {
    const APIUrl = `https://api.themoviedb.org/3/movie/popular?api_key=951446c9e47a99cb6ccfb776c60023c7&language=en-US&page=1`;

    const response = await fetch(APIUrl);

    const popularMovies = await response.json();

    return popularMovies;
}