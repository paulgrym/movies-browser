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
  selectPersonByQuery,
} from "./popularPeopleSlice";
import { APIImageUrl } from "../../APIdata";
import { useQueryParameter } from "../../../common/Search/queryParameterHooks";
import searchQueryParamName from "../../../common/Search/searchQueryParamName";
import { NoResultsPage } from "../../../common/NoResultsPage";


export const PersonList = () => {
  const dispatch = useDispatch();
  const query = useQueryParameter(searchQueryParamName);

  useEffect(() => {
    dispatch(fetchPeople(query));
  }, [dispatch, query]);

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const people = useSelector((state) => selectPersonByQuery(state, query));

  return (
    <Section>
      {query && people.length === 0 
        ? <NoResultsPage query={query} />
        : loading 
            ? <>
                <Title>
                  {query
                    ? `Search results for "${query[0].toUpperCase() + query.slice(1)}"`
                    : "Popular people"}
                </Title>
                <Loader />
              </>
            : error 
                ? <ErrorPage />
                : <>
                    <Title>
                      {query
                        ? `Search results for "${query[0].toUpperCase() + query.slice(1)}" (${people.length})`
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
