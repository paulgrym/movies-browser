import {
  Content,
  List,
  Navigation,
  Logo,
  Item,
  SearchBox,
  Search,
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
          <Search placeholder="Search for movies..." />
        </SearchBox>
      </Content>
    </Wrapper>
  );
};
