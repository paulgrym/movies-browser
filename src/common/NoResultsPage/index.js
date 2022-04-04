import { Section } from "../Section";
import { NoResultsImage, Wrapper } from "./styled";
import { Title } from "../Title";


export const NoResultsPage = ({ query }) => {
  return (
    <Section>
      <Title>
        {`Sorry, there are no results for "${query[0].toUpperCase() + query.slice(1)}"`}
      </Title>
      <Wrapper>
        <NoResultsImage />
      </Wrapper>
    </Section>
  );
};