import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useSelector } from "react-redux";
import { MovieTile } from "../../../../common/MovieTile";
import { MovieWrapper } from "../../../../common/MovieWrapper";
import { Section } from "../../../../common/Section";
import { Arrow, Container, ShowAllButton } from "../../../../common/ShowAllContainer";
import { Title } from "../../../../common/Title";
import { imageUrl } from "../../../APIdata";
import { selectGenres } from "../../../genresSlice";
import { selectMovieCrew } from "../personDetailsSlice";

export const MovieCrew = () => {
  const genresTable = useSelector(selectGenres);
  const movieCrew = useSelector(selectMovieCrew);

  const [isAllMovieCrewShown, setIsAllMovieCrewShown] = useState(false);
  const toggleIsAllMovieCrewShown = () => setIsAllMovieCrewShown(isAllMovieCrewShown => !isAllMovieCrewShown);

  const movieCrewShown = isAllMovieCrewShown ? movieCrew.length : 8;

  if (movieCrew.length > 0) {
    return (
      <Section as="article">
        <Title>Movies - crew ({movieCrew.length})</Title>
        <MovieWrapper>
          {movieCrew.slice(0, movieCrewShown).map(movie => (
            <MovieTile
              key={nanoid()}
              poster={`${imageUrl}/w342${movie.poster_path}`}
              posterPath={movie.poster_path}
              title={movie.title}
              date={movie.release_date?.slice(0, 4)}
              voteAverage={movie.vote_average}
              voteCount={`${movie.vote_count} votes`}
              genres={genresTable.filter((genre) => movie.genre_ids.includes(genre.id))}
              id={movie.id}
              job={movie.job}
            />
          ))}
        </MovieWrapper>
        {movieCrew.length > 8 && (
          <Container>
            <ShowAllButton
              onClick={toggleIsAllMovieCrewShown}
              isAllShown={isAllMovieCrewShown}
            >
              {isAllMovieCrewShown && <Arrow> ⇑ </Arrow>}
              {isAllMovieCrewShown ? "Hide" : "Show all"}
              {!isAllMovieCrewShown && <Arrow> ⇓</Arrow>}
            </ShowAllButton>
          </Container>
        )}
      </Section>
    );
  } return null;
};