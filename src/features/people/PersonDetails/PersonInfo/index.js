import { APIImageUrl } from "../../../APIdata.js";
import {
  Content,
  Description,
  DetailedInfo,
  Key, PersonImage,
  PersonTile,
  Title,
  Value,
  Wrapper,
  NoPersonInfoImage
} from "./styled.js";
import { useSelector } from "react-redux";
import { NoPersonImageIcon } from "../../../../common/PersonTile/styled.js";
import { selectPerson } from "../personDetailsSlice.js";
import { Section } from "../../../../common/Section.js";

export const PersonInfo = () => {
  const personDetails = useSelector(selectPerson);
  const profilePath = personDetails.profile_path;

  return (
    <Section>
      <PersonTile>
        <Wrapper>
          {profilePath
            ? <PersonImage src={`${APIImageUrl}/w342${profilePath}`} alt="" />
            : <NoPersonInfoImage><NoPersonImageIcon /></NoPersonInfoImage>
          }
          <Content>
            <Title>{personDetails.name}</Title>
            <DetailedInfo>
              <Key>Date of birth:</Key>
              <Value>
                {
                  personDetails.birthday
                    ? (new Date(personDetails.birthday)).toLocaleDateString()
                    : "Unknown"
                }
              </Value>
            </DetailedInfo>
            <DetailedInfo>
              <Key>Place of birth:</Key>
              <Value>
                {
                  personDetails.place_of_birth
                    ? personDetails.place_of_birth
                    : "Unknown"
                }
              </Value>
            </DetailedInfo>
          </Content>
        </Wrapper>
        <Description>
          {
            personDetails.biography
              ? personDetails.biography
              : null
          }
        </Description>
      </PersonTile>
    </Section>
  );
};