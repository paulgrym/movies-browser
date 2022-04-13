import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Section } from "../../../common/Section";
import { Loader } from "../../../common/Loader";
import { Error } from "../../../common/Error";
import { fetchMovieDetails, selectError, selectLoading } from "./movieDetailsSlice";
import { MovieInfo } from "./MovieInfo";
import { useParams } from "react-router-dom";
import { Cast } from "./Cast";
import { Crew } from "./Crew";
import { MovieTitle } from "./MovieTitle";
import { MainContainer } from "../../../common/MainContainer";

export const MovieDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, [id, dispatch]);

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    error
      ? <Section>< Error /></Section >
      : <>
        {loading
          ? <Section><Loader /></Section>
          :
          <>
            <MovieTitle />
            <MainContainer>
              <Section>
                <MovieInfo />
                <Cast />
                <Crew />
              </Section>
            </MainContainer>
          </>
        }
      </>
  );
};