import { Section } from "../Section";
import { Spinner, Wrapper } from "./styled";

export const LoadingPage = () => {
  return (
    <Section title={"Search results for “Mulan”"}>
      <Wrapper>
        <Spinner />
      </Wrapper>
    </Section>
  );
};