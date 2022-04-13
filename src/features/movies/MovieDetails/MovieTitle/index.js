import { useSelector } from "react-redux";
import { imageUrl } from "../../../APIdata";
import { selectMovie } from "../movieDetailsSlice";
import {
  Backdrop,
  BackdropContainer,
  Container,
  MaxRate,
  Rate,
  RateContainer,
  RateIcon,
  Rating,
  Title,
  Votes,
  Wrapper
} from "./styled";

export const MovieTitle = () => {
  const movieDetails = useSelector(selectMovie);

  if (movieDetails.backdrop_path) {
    return (
      <Wrapper>
        <BackdropContainer>
          <Backdrop src={`${imageUrl}/original/${movieDetails.backdrop_path}`} />
          <Container>
            <Title>{movieDetails.title}</Title>
            <Rating>
              <RateContainer>
                <RateIcon />
                <Rate>{movieDetails.vote_average} </Rate>
                <MaxRate>/10 </MaxRate>
              </RateContainer>
              <Votes>{movieDetails.vote_count} votes</Votes>
            </Rating>
          </Container>
        </BackdropContainer>
      </Wrapper>
    )
  } else return null
};