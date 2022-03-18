import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useSelector } from "react-redux"
import { PersonTile } from "../../../../common/PersonTile";
import { Section } from "../../../../common/Section";
import { Title } from "../../../../common/Title";
import { APIImageUrl } from "../../../APIdata";
import { selectMovieCrew } from "../movieDetailsSlice"
import { Container, Expander, PeopleWrapperExpandable } from "../../../../common/ExpandingSection";

export const Crew = () => {
  const crew = useSelector(selectMovieCrew);

  const [isCrewExpanded, setIsCrewExpanded] = useState(false);

  const toggleIsCrewExpanded = () => setIsCrewExpanded(isCrewExpanded => !isCrewExpanded);

  return (
    <Section as="article">
      <Title>Crew</Title>

      <PeopleWrapperExpandable isExpanded={isCrewExpanded}>
        {crew.map(person => (
          <PersonTile
            key={nanoid()}
            profileImage={`${APIImageUrl}/w185${person.profile_path}`}
            profilePath={person.profile_path}
            fullName={person.name}
            job={person.job}
          />
        ))
        }
      </PeopleWrapperExpandable>

      <Container isExpanded={isCrewExpanded}>
        <Expander onClick={toggleIsCrewExpanded}>
          {isCrewExpanded ? "Hide" : "Show all"}
        </Expander>
      </Container>

    </Section>
  );
};