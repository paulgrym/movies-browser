import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Section } from "../../../common/Section";
import { Loader } from "../../../common/Loader";
import { ErrorPage } from "../../../common/ErrorPage";
import { fetchMovieDetails, selectError, selectLoading, selectMovies } from "./movieDetailsSlice";
import { MovieInfo } from "./MovieInfo";

export const MovieDetails = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieDetails());
  }, [dispatch])

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <Section>
      {error
        ? <ErrorPage />
        : <>
          {loading
            ? <Loader />
            : <MovieInfo />
          }
        </>
      }
    </Section>
  );
};