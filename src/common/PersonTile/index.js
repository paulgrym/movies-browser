import { toPerson } from "../../routes";
import { StyledPersonTile, PersonFullName, PersonImage, PersonFunction, PersonDetails, NoPersonImage, NoPersonImageIcon } from "./styled";

export const PersonTile = ({ profileImage, fullName, character, profilePath, job, id }) => {

  return (
    <StyledPersonTile to={toPerson({ id: id })}>
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
    </StyledPersonTile>
  );

}