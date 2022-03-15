import { Section } from "../../../common/Section"
import { Title } from "../../../common/Title";
import { PersonTile } from "../../../common/PersonTile";
import { Wrapper } from "./styled";
import { usePopularPeople } from "./usePopularPeople"

export const PersonList = () => {
  const popularPeople = usePopularPeople();

  return (
    <Section>
      <Title>Popular people</Title>
      <Wrapper>
        {
          popularPeople?.data?.map((person, index) => (
            <PersonTile
              key={index}
              profileImage={`https://image.tmdb.org/t/p/original${person.profile_path}`}
              fullName={person.name}
            />
          ))
        }
      </Wrapper>
    </Section>
  );
}