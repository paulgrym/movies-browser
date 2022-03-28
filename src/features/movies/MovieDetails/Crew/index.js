import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useSelector } from "react-redux";
import { PersonTile } from "../../../../common/PersonTile";
import { Section } from "../../../../common/Section";
import { Title } from "../../../../common/Title";
import { APIImageUrl } from "../../../APIdata";
import { selectMovieCrew } from "../movieDetailsSlice";
import { Arrow, Container, ShowAllButton } from "../../../../common/ShowAllButton";
import { PeopleWrapper } from "../../../../common/PeopleWrapper";

export const Crew = () => {
  const crew = useSelector(selectMovieCrew);

  const [isAllCrewShown, setIsAllCrewShown] = useState(false);

  const toggleIsAllCrewShown = () => setIsAllCrewShown(isAllCrewShown => !isAllCrewShown);

  const crewShown = isAllCrewShown ? crew.length : 10;

  if (crew.length !== 0) {
    return (
      <Section as="article">
        <Title>Crew</Title>
        <PeopleWrapper>
          {crew.slice(0, crewShown).map(person => (
            <PersonTile
              key={nanoid()}
              profileImage={`${APIImageUrl}/w185${person.profile_path}`}
              profilePath={person.profile_path}
              fullName={person.name}
              job={person.job}
            />
          ))}
        </PeopleWrapper>
        {crew.length >= 10 && (
          <Container>
            <ShowAllButton
              onClick={toggleIsAllCrewShown}
              isAllPeopleShown={isAllCrewShown}
            >
              {isAllCrewShown && <Arrow> ⇑ </Arrow>}
              {isAllCrewShown ? "Hide" : "Show all"}
              {!isAllCrewShown && <Arrow> ⇓</Arrow>}
            </ShowAllButton>
          </Container>
        )}
      </Section>
    );
  } else return null;
};