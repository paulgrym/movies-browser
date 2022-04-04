import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ErrorPage } from "../../../common/ErrorPage";
import { Loader } from "../../../common/Loader";
import { MainContainer } from "../../../common/MainContainer";
import { MovieCast } from "./MovieCast";
import { MovieCrew } from "./MovieCrew";
import { fetchPersonDetails, selectError, selectLoading } from "./personDetailsSlice";
import { PersonInfo } from "./PersonInfo";

export const PersonDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchPersonDetails(id));
  }, [id, dispatch]);

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <>
      {error
        ? <ErrorPage />
        : <>
          {loading
            ? <Loader />
            :
            <MainContainer>
              <PersonInfo />
              <MovieCast />
              <MovieCrew />
            </MainContainer>
          }
        </>
      }
    </>
  );
};