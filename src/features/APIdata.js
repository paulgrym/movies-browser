export const API_URL = "https://api.themoviedb.org/3";

export const API_KEY = "951446c9e47a99cb6ccfb776c60023c7";

export const popularMoviesUrl = page =>
  `${API_URL}/movie/popular?api_key=${API_KEY}&page=${encodeURIComponent(page)}`;

export const searchMovieUrl = (query, page) =>
  `${API_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${encodeURIComponent(page)}`;

export const popularPeopleUrl = page =>
  `${API_URL}/person/popular?api_key=${API_KEY}&page=${encodeURIComponent(page)}`;

export const searchPersonUrl = (query, page) =>
  `${API_URL}/search/person?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${encodeURIComponent(page)}`;

export const imageUrl = `https://image.tmdb.org/t/p`;

export const genresUrl = `${API_URL}/genre/movie/list?api_key=${API_KEY}`;

export const movieDetailsUrl = movieId => `${API_URL}/movie/${encodeURIComponent(movieId)}?api_key=${API_KEY}`;

export const movieCreditsUrl = movieId => `${API_URL}/movie/${encodeURIComponent(movieId)}/credits?api_key=${API_KEY}`;

export const personDetailsUrl = personId => `${API_URL}/person/${encodeURIComponent(personId)}?api_key=${API_KEY}`;

export const personCreditsUrl = personId => `${API_URL}/person/${encodeURIComponent(personId)}/credits?api_key=${API_KEY}`;
