import {
  Content,
  List,
  Navigation,
  Title,
  Item,
  Name,
  SearchBox,
  Search,
  Wrapper,
  Link,
  VideoIcon,
  Container,
  SearchIcon,
} from "./styled";

export const Header = () => (
  <Wrapper>
    <Content>
      <Container>
        <Title>
          <Link>
            <VideoIcon />
            Movies Browser
          </Link>
        </Title>
        <Navigation>
          <List>
            <Item>
              <Name>Movies</Name>
            </Item>
            <Item>
              <Name>People</Name>
            </Item>
          </List>
        </Navigation>
      </Container>
      <SearchBox>
        <SearchIcon />
        <Search placeholder="Search for movies..."/>
      </SearchBox>
    </Content>
  </Wrapper>
);
