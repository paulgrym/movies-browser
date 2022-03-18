import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useSelector } from "react-redux"
import { PersonTile } from "../../../../common/PersonTile";
import { Section } from "../../../../common/Section";
import { Title } from "../../../../common/Title";
import { APIImageUrl } from "../../../APIdata";
import { selectMovieCast } from "../movieDetailsSlice"
import { Container, Expander, PeopleWrapperExpandable } from "../../../../common/ExpandingSection";

export const Cast = () => {
  const cast = useSelector(selectMovieCast);

  const [isCastExpanded, setIsCastExpanded] = useState(false);

  const toggleIsCastExpanded = () => setIsCastExpanded(isCastExpanded => !isCastExpanded);

  return (
    <Section as="article">
      <Title>Cast</Title>

      <PeopleWrapperExpandable isExpanded={isCastExpanded}>
        {cast.map(person => (
          <PersonTile
            key={nanoid()}
            profileImage={`${APIImageUrl}/w185${person.profile_path}`}
            profilePath={person.profile_path}
            fullName={person.name}
            character={person.character}
          />
        ))
        }
      </PeopleWrapperExpandable>

      <Container isExpanded={isCastExpanded}>
        <Expander onClick={toggleIsCastExpanded}>
          {isCastExpanded ? "Hide" : "Show all"}
        </Expander>
      </Container>

    </Section>
  );
};