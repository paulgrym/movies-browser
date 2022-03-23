import debounce from "lodash.debounce";
// import {debounce} from "redux-saga/effects";
import { useLocation } from "react-router-dom";
import { StyledSearch } from "./styled";
import searchQueryParamName from "./searchQueryParamName";
import { useReplaceQueryParameter } from "./queryParameterHooks";

export const Search = () => {
  const location = useLocation();
  const replaceQueryParameter = useReplaceQueryParameter();
  // const query = useQueryParameter(searchQueryParamName);

  const onInputChange = debounce(({ target }) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined,
    });

    // replaceQueryParameter({
    //   key: "page",
    //   value: target.value.trim() !== "" ? target.value : undefined,
    // });

  }, 1000);

  return (
    <StyledSearch
      onChange={onInputChange}
      placeholder={`Search for ${location.pathname === "/movies" || location.pathname.indexOf("/movies/") === 0
        ? "movies..." 
        : "people..."}
      `}
      disabled={
        location.pathname.indexOf("/movies/") === 0 ||
        location.pathname.indexOf("/people/") === 0
      }
    />
  );
};
