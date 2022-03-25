import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { Section } from "../../../common/Section"
import { Title } from "../../../common/Title";
import { PersonTile } from "../../../common/PersonTile";
import { ErrorPage } from "../../../common/ErrorPage";
import { Loader } from "../../../common/Loader";
import { PeopleWrapper } from "../../../common/PeopleWrapper"
import {
  fetchPeople,
  selectError,
  selectLoading,
  selectPeople,
} from "./popularPeopleSlice";
import { APIImageUrl } from "../../APIdata";
import { MainContainer } from "../../../common/MainContainer";
import { Pagination } from "../../../common/Pagination";


export const PersonList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch])

  const popularPeople = useSelector(selectPeople);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <MainContainer>
      {error
        ? <Section>
          <ErrorPage />
        </Section>
        : loading
          ? <Section>
            <Title>Popular people</Title>
            <Loader />
          </Section>
          : <>
            <Section>
              <Title>Popular movies</Title>
              <PeopleWrapper>
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
            </Section>
            <Pagination />
          </>
      }
    </MainContainer>
  );
};

