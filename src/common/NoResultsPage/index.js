import { Section } from "../Section";
import { NoResultsImage, Wrapper } from "./styled";
import { Title } from "../Title";


export const NoResultsPage = () => {
  return (
    <Section>
      <Title> Sorry, there are no results for “Muan” </Title>
      <Wrapper>
        <NoResultsImage />
      </Wrapper>
    </Section>
  );
};