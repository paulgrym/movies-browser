import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Section } from "../../../common/Section";
import { Loader } from "../../../common/Loader";
import { ErrorPage } from "../../../common/ErrorPage";
import { fetchMovieDetails, selectError, selectLoading, selectMovies } from "./movieDetailsSlice";

export const MovieDetails = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieDetails());
  }, [dispatch])

  const moviesDetails = useSelector(selectMovies);
  console.log(moviesDetails[0]?.title)
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <Section>
      {error
        ? <ErrorPage />
        : <>
          {loading
            ? <Loader />
            : <div>{moviesDetails[0]?.title}</div>
          }
        </>
      }
    </Section>
  );
};