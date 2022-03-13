import { Button, Wrapper, Icon, Info, Message} from "./styled";

export const ErrorPage = () => (
    <Wrapper>
      <Icon />
      <Info>Oooops! Something went wrong...</Info>
      <Message>Please check your network connection and try again</Message>
      <Button>Back to home page</Button>
    </Wrapper>
);
