import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useSelector } from "react-redux";
import { PersonTile } from "../../../../common/PersonTile";
import { Section } from "../../../../common/Section";
import { Title } from "../../../../common/Title";
import { APIImageUrl } from "../../../APIdata";
import { selectMovieCast } from "../movieDetailsSlice";
import { Arrow, Container, ShowAllButton } from "../../../../common/ShowAllButton";
import { PeopleWrapper } from "../../../../common/PeopleWrapper";

export const Cast = () => {
  const cast = useSelector(selectMovieCast);

  const [isAllCastShown, setIsAllCastShown] = useState(false);

  const toggleIsAllCastShown = () => setIsAllCastShown(isAllCastShown => !isAllCastShown);

  const castShown = isAllCastShown ? cast.length : 10;

  if (cast.length !== 0) {
    return (
      <Section as="article">
        <Title>Cast</Title>
        <PeopleWrapper>
          {cast.slice(0, castShown).map(person => (
            <PersonTile
              key={nanoid()}
              profileImage={`${APIImageUrl}/w185${person.profile_path}`}
              profilePath={person.profile_path}
              fullName={person.name}
              character={person.character}
            />
          ))}
        </PeopleWrapper>
        {cast.length >= 10 && (
          <Container>
            <ShowAllButton
              onClick={toggleIsAllCastShown}
              isAllPeopleShown={isAllCastShown}
            >
              {isAllCastShown && <Arrow> ⇑ </Arrow>}
              {isAllCastShown ? "Hide" : "Show all"}
              {!isAllCastShown && <Arrow> ⇓</Arrow>}
            </ShowAllButton>
          </Container>
        )}
      </Section>
    );
  } else return null;
};