import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Section } from "../../../common/Section"
import { Title } from "../../../common/Title";
import { PersonTile } from "../../../common/PersonTile";
import {
  fetchPeople,
  selectError,
  selectLoading,
  selectPeople,
} from "./popularPeopleSlice";
import { Wrapper } from "./styled";
import { ErrorPage } from "../../../common/ErrorPage";
import { Loader } from "../../../common/Loader";
import { usePopularPeople } from "./usePopularPeople";

export const PersonList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch])

  // const popularPeople = usePopularPeople();

  const popularPeople = useSelector(selectPeople);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <Section>
      {error
        ? <ErrorPage />
        : <>
          <Title>Popular people</Title>
          {loading
            ? <Loader />
            : <Wrapper>
              {
                popularPeople?.data?.map((person, index) => (
                  <PersonTile
                    key={index}
                    profileImage={`https://image.tmdb.org/t/p/original${person.profile_path}`}
                    fullName={person.name}
                  />
                ))
              }
            </Wrapper>
          }
        </>
      }
    </Section>
  );
}

