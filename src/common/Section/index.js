import { Body, Title, Wrapper } from "./styled";

export const Section = ({ title, body }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Body>{body}</Body>
    </Wrapper>
  );
}