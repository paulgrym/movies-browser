import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Section } from "../../../common/Section";
import { Loader } from "../../../common/Loader";
import { ErrorPage } from "../../../common/ErrorPage";
import { fetchMovieDetails, selectError, selectLoading } from "./movieDetailsSlice";
import { MovieInfo } from "./MovieInfo";
import { useParams } from "react-router-dom";
import { Cast } from "./Cast";
import { Crew } from "./Crew";

export const MovieDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, [id, dispatch])

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <Section>
      {error
        ? <ErrorPage />
        : <>
          {loading
            ? <Loader />
            :
            <>
              <MovieInfo />
              <Cast />
              <Crew />
            </>
          }
        </>
      }
    </Section>
  );
};