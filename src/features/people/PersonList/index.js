import { Section } from "../../../common/Section"
import { PersonTile } from "./PersonTile";
import { Wrapper } from "./styled";
import { usePopularPeople } from "./usePopularPeople"

export const PersonList = () => {
  const popularPeople = usePopularPeople();

  return (
    <Section title="Popular people">
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