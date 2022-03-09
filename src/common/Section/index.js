import { Body, Title, SectionTag } from "./styled";

export const Section = ({ title, body }) => {
  return (
    <SectionTag>
      <Title>{title}</Title>
      <Body>{body}</Body>
    </SectionTag>
  );
}