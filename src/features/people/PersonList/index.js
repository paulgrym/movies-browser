import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { Section } from "../../../common/Section"
import { Title } from "../../../common/Title";
import { PersonTile } from "../../../common/PersonTile";
import { ErrorPage } from "../../../common/ErrorPage";
import { Loader } from "../../../common/Loader";
import { PeopleWrapper } from "../../../common/PeopleWrapper/styled"
import {
  fetchPeople,
  selectError,
  selectLoading,
  selectPeople,
} from "./popularPeopleSlice";
import { APIImageUrl } from "../../APIdata";


export const PersonList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch])

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
            : <PeopleWrapper>
              {
                popularPeople.map(person => (
                  <PersonTile
                    key={nanoid()}
                    profileImage={`${APIImageUrl}/w185${person.profile_path}`}
                    profilePath={person.profile_path}
                    fullName={person.name}
                  />
                ))
              }
            </PeopleWrapper>
          }
        </>
      }
    </Section>
  );
}

