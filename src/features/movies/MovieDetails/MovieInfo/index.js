import { useSelector } from "react-redux";
import { selectMovies } from "../movieDetailsSlice";
import {
  Content,
  MovieTile,
  MovieImage,
  Title,
  NoMovieImage,
  NoMovieImageIcon,
  Wrapper,
  Description,
  Year,
  Tag,
  Tags,
  Rating,
  RateIcon,
  Rate,
  Votes,
  MaxRate,
  DetailedInfo,
  Key,
  Value
} from "./styled"
import { APIImageUrl } from "../../../APIdata.js"

export const MovieInfo = () => {
  const moviesDetails = useSelector(selectMovies);
  console.log(moviesDetails)

  const posterPath = moviesDetails[0]?.poster_path;
  // const posterPath = null;
  const date = new Date(moviesDetails[0]?.release_date)

  return (
    <MovieTile>
      <Wrapper>
        {posterPath
          ? <MovieImage src={`${APIImageUrl}/w342${moviesDetails[0]?.poster_path}`} alt="" />
          : <NoMovieImage><NoMovieImageIcon /></NoMovieImage>
        }
        <Content>
          <Title>{moviesDetails[0]?.title}</Title>
          <Year>{moviesDetails[0]?.release_date.slice(0, 4)}</Year>

          <DetailedInfo>
            <Key>Production: </Key>
            <Value>Country</Value>
          </DetailedInfo>

          <DetailedInfo>
            <Key>Release date: </Key>
            <Value>{date.toLocaleDateString()}</Value>
          </DetailedInfo>

          <Tags>
            <Tag>example</Tag>
            <Tag>example</Tag>
            <Tag>example</Tag>
            <Tag>example</Tag>
            <Tag>example</Tag>
            <Tag>example</Tag>
          </Tags>

          <Rating>
            <RateIcon />
            <Rate>{moviesDetails[0]?.vote_average} </Rate>
            <MaxRate>/10 </MaxRate>
            <Votes>{moviesDetails[0]?.vote_count} votes</Votes>
          </Rating>

        </Content>
      </Wrapper>
      <Description>{moviesDetails[0]?.overview}</Description>
    </MovieTile>
  );
};