import { Wrapper, PersonFullName, PersonImage } from "./styled";

export const PersonTile = ({ profileImage, fullName }) => {

  return (
    <Wrapper>
      <PersonImage src={profileImage} alt="" />
      <PersonFullName>{fullName}</PersonFullName>
    </Wrapper>
  );

}