import { APIImageUrl } from "../../../APIdata.js"
import { Content, Description, DetailedInfo, Key, PersonImage, PersonTile, Title, Value, Wrapper } from "./styled.js";
import { useSelector } from "react-redux";
import { NoPersonImage, NoPersonImageIcon } from "../../../../common/PersonTile/styled.js";
import { selectPerson } from "../personDetailsSlice.js";
import { Section } from "../../../../common/Section.js";

export const PersonInfo = () => {
  const personDetails = useSelector(selectPerson);
  const profilePath = personDetails.profile_path;

  const formatBirthday = (date) => {
    const newDate = date?.split("-");
    return newDate && `${newDate[2]}.${newDate[1]}.${newDate[0]}`
  }

  return (
    <Section>
      <PersonTile>
        <Wrapper>
          {profilePath
            ? <PersonImage src={`${APIImageUrl}/w342${profilePath}`} alt="" />
            : <NoPersonImage><NoPersonImageIcon /></NoPersonImage>
          }
          <Content>
            <Title>{personDetails.name}</Title>
            <DetailedInfo>
              <Key>Date of birth:</Key>
              <Value>
                {formatBirthday(personDetails.birthday)}
              </Value>
            </DetailedInfo>
            <DetailedInfo>
              <Key>Place of birth:</Key>
              <Value>
                {personDetails.place_of_birth}
              </Value>
            </DetailedInfo>
          </Content>
        </Wrapper>
        <Description>{personDetails.biography}</Description>
      </PersonTile>
    </Section>
  );
};