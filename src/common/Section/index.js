import { Title, Wrapper } from "./styled";

export const Section = ({ title, children }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
};