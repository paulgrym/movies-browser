export const APIUrl = "https://api.themoviedb.org/3"

export const APIKey = "951446c9e47a99cb6ccfb776c60023c7"

export const APIPopularMoviesUrl = `${APIUrl}/movie/popular?api_key=${APIKey}`

export const APIPopularPeopleUrl = `${APIUrl}/person/popular?api_key=${APIKey}`

export const APIImageUrl = `https://image.tmdb.org/t/p`

export const APIgenresUrl = `${APIUrl}/genre/movie/list?api_key=${APIKey}`

export const APImovieDetailsUrl = (movieId) => `${APIUrl}/movie/${movieId}?api_key=${APIKey}`;

export const APImovieCreditsUrl = (movieId) => `${APIUrl}/movie/${movieId}/credits?api_key=${APIKey}`;
