export const APIurl = "https://api.themoviedb.org/3";

export const APIkey = "951446c9e47a99cb6ccfb776c60023c7";

export const APIpopularMoviesUrl = page =>
  `${APIurl}/movie/popular?api_key=${APIkey}&page=${page}`;

export const APIsearchMovieUrl = (query, page) =>
  `${APIurl}/search/movie?api_key=${APIkey}&query=${query}&page=${page}`;

export const APIpopularPeopleUrl = page =>
  `${APIurl}/person/popular?api_key=${APIkey}&page=${page}`;

export const APIsearchPersonUrl = (query, page) =>
  `${APIurl}/search/person?api_key=${APIkey}&query=${query}&page=${page}`;

export const APIimageUrl = `https://image.tmdb.org/t/p`;

export const APIgenresUrl = `${APIurl}/genre/movie/list?api_key=${APIkey}`;

export const APImovieDetailsUrl = movieId => `${APIurl}/movie/${movieId}?api_key=${APIkey}`;

export const APImovieCreditsUrl = movieId => `${APIurl}/movie/${movieId}/credits?api_key=${APIkey}`;

export const APIpersonDetailsUrl = personId => `${APIurl}/person/${personId}?api_key=${APIkey}`;

export const APIpersonCreditsUrl = personId => `${APIurl}/person/${personId}/credits?api_key=${APIkey}`;
