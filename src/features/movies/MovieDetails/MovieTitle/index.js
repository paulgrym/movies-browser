import { useSelector } from "react-redux";
import { selectMovie } from "../movieDetailsSlice";
import { Title, Wrapper } from "./styled";

export const MovieTitle = () => {
  const movieDetails = useSelector(selectMovie);

  return (
    <Wrapper>
      <Title>{movieDetails.title}</Title>
    </Wrapper>
  );
};