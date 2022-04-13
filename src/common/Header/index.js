import { toMovies, toPeople } from "../../routes";
import { Search } from "../Search";
import {
  Content,
  List,
  Navigation,
  Logo,
  Item,
  Wrapper,
  StyledLink,
  VideoIcon,
  Container,
  StyledNavLink,
} from "./styled";

export const Header = () => {
  const onLogoClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Wrapper>
      <Content>
        <Container>
          <Logo onClick={onLogoClick}>
            <StyledLink to={toMovies()}>
              <VideoIcon />
              Movies Browser
            </StyledLink>
          </Logo>
          <Navigation>
            <List>
              <Item>
                <StyledNavLink to={toMovies()}>Movies</StyledNavLink>
              </Item>
              <Item>
                <StyledNavLink to={toPeople()}>People</StyledNavLink>
              </Item>
            </List>
          </Navigation>
        </Container>
        <Search />
      </Content>
    </Wrapper>
  );
};
