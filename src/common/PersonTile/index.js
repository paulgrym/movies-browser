import { Wrapper, PersonFullName, PersonImage, PersonFunction, PersonDetails, NoPersonImage, NoPersonImageIcon } from "./styled";

export const PersonTile = ({ profileImage, fullName, character, profilePath, job }) => {

  return (
    <Wrapper>
      {profilePath
        ? <PersonImage src={profileImage} alt="" />
        : <NoPersonImage><NoPersonImageIcon /></NoPersonImage>
      }
      <PersonDetails>
        <PersonFullName>{fullName}</PersonFullName>
        {character &&
          <PersonFunction>{character}</PersonFunction>
        }
        {job &&
          <PersonFunction>{job}</PersonFunction>
        }
      </PersonDetails>
    </Wrapper>
  );

}