import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { Section } from "../../../common/Section";
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
  selectTotalResults,
} from "./popularPeopleSlice";
import { APIImageUrl } from "../../APIdata";
import { useQueryParameter } from "../../../common/Search/queryParameterHooks";
import { NoResultsPage } from "../../../common/NoResultsPage";
import { capitalize } from "../../capitalize";
import { queryParameters } from "../../../common/Search/queryParameters";

  export const PersonList = () => {
  const dispatch = useDispatch();
  const query = useQueryParameter(queryParameters.search);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const people = useSelector(selectPeople);
  const totalResults = useSelector(selectTotalResults);

  useEffect(() => {
    dispatch(fetchPeople({ query }));
  }, [dispatch, query]);

  return (
    <Section>
      {query && totalResults === 0
        ? <NoResultsPage query={query} />
        : error 
          ? <ErrorPage />
          : loading 
            ? <>
                <Title>
                  {query
                    ? `Search results for "${capitalize(query)}"`
                    : "Popular people"}
                </Title>
                <Loader />
              </>
            : error 
                ? <ErrorPage />
                : <>
                    <Title>
                      {query
                        ? `Search results for "${capitalize(query)} (${totalResults})"`
                        : "Popular people"}
                    </Title>
                    <PeopleWrapper>
                      {people.map((person) => (
                        <PersonTile
                          key={nanoid()}
                          profileImage={`${APIImageUrl}/w185${person.profile_path}`}
                          profilePath={person.profile_path}
                          fullName={person.name}
                        />
                      ))}
                    </PeopleWrapper>
                  </>
      }
    </Section>
  );
};
