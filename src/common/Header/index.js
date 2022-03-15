import { Search } from "../Search";
import {
  Content,
  List,
  Navigation,
  Logo,
  Item,
  SearchBox,
  Wrapper,
  StyledLink,
  VideoIcon,
  Container,
  SearchIcon,
  StyledNavLink,
} from "./styled";

export const Header = () => {

  return (
    <Wrapper>
      <Content>
        <Container>
          <Logo>
            <StyledLink 
              to="/"
            >
              <VideoIcon />
              Movies Browser
            </StyledLink>
          </Logo>
            <Navigation>
              <List>
                <Item>
                  <StyledNavLink 
                    to="/movies" 
                  >
                  Movies
                  </StyledNavLink>
                </Item>
                <Item>
                  <StyledNavLink
                    to="/people"
                  >
                  People
                  </StyledNavLink>
                </Item>
              </List>
            </Navigation>
        </Container>
        <SearchBox>
          <SearchIcon />
          <Search />
        </SearchBox>
      </Content>
    </Wrapper>
  );
};
