import { toMovies, toPeople } from "../../routes";
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
              to={toMovies()}
            >
              <VideoIcon />
              Movies Browser
            </StyledLink>
          </Logo>
            <Navigation>
              <List>
                <Item>
                  <StyledNavLink 
                    to={toMovies()} 
                  >
                  Movies
                  </StyledNavLink>
                </Item>
                <Item>
                  <StyledNavLink
                    to={toPeople()}
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
