import { Wrapper, PersonFullName, PersonImage, PersonCharacter, PersonDetails, NoPersonImage, NoPersonImageIcon } from "./styled";

export const PersonTile = ({ profileImage, fullName, character, profilePath }) => {

  return (
    <Wrapper>
      {profilePath
        ? <PersonImage src={profileImage} alt="" />
        : <NoPersonImage><NoPersonImageIcon /></NoPersonImage>
      }
      <PersonDetails>
        <PersonFullName>{fullName}</PersonFullName>
        {character &&
          <PersonCharacter>{character}</PersonCharacter>
        }
      </PersonDetails>
    </Wrapper>
  );

}