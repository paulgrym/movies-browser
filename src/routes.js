export const toMovies = () => "/movies";
export const toMovie = ({ id } = { id: ":id" }) => `/movies/${id}` 

export const toPeople = () => "/people";
export const toPerson = ({ id } = { id: ":id" }) => `/people/${id}`