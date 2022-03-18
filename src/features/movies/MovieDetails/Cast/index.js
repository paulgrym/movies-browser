import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux"
import { PeopleWrapper } from "../../../../common/PeopleWrapper/styled"
import { PersonTile } from "../../../../common/PersonTile";
import { Section } from "../../../../common/Section";
import { Title } from "../../../../common/Title";
import { APIImageUrl } from "../../../APIdata";
import { selectMovieCast } from "../movieDetailsSlice"
import noProfileImage from "../../../../images/no-profile-image.svg"

export const Cast = () => {
  const cast = useSelector(selectMovieCast);
  console.log(cast);

  return (
    <Section>
      <Title>Cast</Title>
      <PeopleWrapper>
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

      </PeopleWrapper>
    </Section>
  )

}