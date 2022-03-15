import { useSelector } from "react-redux";
import { selectMovies } from "../movieDetailsSlice";
import { Content, MovieTile, MovieImage, Title, NoMovieImage, NoMovieImageIcon, Wrapper, Description, Year, Tag, Tags } from "./styled"
import { APIImageUrl } from "../../../APIdata.js"

export const MovieInfo = () => {
  const moviesDetails = useSelector(selectMovies);
  console.log(moviesDetails)

  const posterPath = moviesDetails[0]?.poster_path;
  // const posterPath = null;

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
          <Tags>
            <Tag>example</Tag>
          </Tags>
        </Content>
      </Wrapper>
      <Description>{moviesDetails[0]?.overview}</Description>
    </MovieTile>
  );
};