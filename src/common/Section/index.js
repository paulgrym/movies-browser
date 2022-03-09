import { Body, Title, SectionTag } from "./styled";

const Section = ({ title, body }) => {
  return (
    <SectionTag>
      <Title>{title}</Title>
      <Body>{body}</Body>
    </SectionTag>
  );
}

export default Section;