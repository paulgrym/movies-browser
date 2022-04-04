import { ButtonLink, Wrapper, Icon, Info, Message } from "./styled";

export const ErrorPage = () => (
  <Wrapper>
    <Icon />
    <Info>Oooops! Something went wrong…</Info>
    <Message>Please check your network connection and try again</Message>
    <ButtonLink to="/">Back to home page</ButtonLink>
  </Wrapper>
);
