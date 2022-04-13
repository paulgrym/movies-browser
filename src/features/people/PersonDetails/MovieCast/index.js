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
import { selectMovieCast } from "../personDetailsSlice";

export const MovieCast = () => {
  const genresTable = useSelector(selectGenres);
  const movieCast = useSelector(selectMovieCast);
  const [isAllMovieCastShown, setIsAllMovieCastShown] = useState(false);
  const movieCastShown = isAllMovieCastShown ? movieCast.length : 8;

  const toggleIsAllMovieCastShown = () => setIsAllMovieCastShown(isAllMovieCastShown => !isAllMovieCastShown);

  if (movieCast.length > 0) {
    return (
      <Section as="article">
        <Title>Movies - cast ({movieCast.length})</Title>
        <MovieWrapper>
          {movieCast.slice(0, movieCastShown).map(movie => (
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
              character={movie.character}
            />
          ))}
        </MovieWrapper>
        {movieCast.length > 8 && (
          <Container>
            <ShowAllButton
              onClick={toggleIsAllMovieCastShown}
              isAllShown={isAllMovieCastShown}
            >
              {isAllMovieCastShown && <Arrow> ⇑ </Arrow>}
              {isAllMovieCastShown ? "Hide" : "Show all"}
              {!isAllMovieCastShown && <Arrow> ⇓</Arrow>}
            </ShowAllButton>
          </Container>
        )}
      </Section>
    );
  } return null;
};