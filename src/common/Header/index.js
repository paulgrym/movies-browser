import { useDispatch } from "react-redux";
import { fetchMovies } from "../../features/movies/MovieList/popularMoviesSlice";

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
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Content>
        <Container>
          <Logo>
            <StyledLink 
              to="/movies"
              onClick={() => dispatch(fetchMovies())}
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
                    onClick={() => dispatch(fetchMovies())}
                  >
                  Movies
                  </StyledNavLink>
                </Item>
                <Item>
                  <StyledNavLink
                    to="/people"
                    // onClick={() => dispatch()}
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
