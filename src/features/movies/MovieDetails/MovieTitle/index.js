import { useSelector } from "react-redux";
import { selectMovie } from "../movieDetailsSlice";
import { MaxRate, Rate, RateContainer, RateIcon, Rating, Title, Votes, Wrapper } from "./styled";

export const MovieTitle = () => {
  const movieDetails = useSelector(selectMovie);

  return (
    <Wrapper>
      <Title>{movieDetails.title}</Title>
      <Rating>
        <RateContainer>
          <RateIcon />
          <Rate>{movieDetails.vote_average} </Rate>
          <MaxRate>/10 </MaxRate>
        </RateContainer>
        <Votes>{movieDetails.vote_count} votes</Votes>
      </Rating>
    </Wrapper>
  );
};