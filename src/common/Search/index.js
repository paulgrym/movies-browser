import debounce from "lodash.debounce";
import { useLocation } from "react-router-dom";
import { StyledSearch } from "./styled";
import searchQueryParamName from "./searchQueryParamName";
import { useReplaceQueryParameter } from "./queryParameterHooks";

export const Search = () => {
  const location = useLocation();
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = debounce(({ target }) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined,
    });

    target.value = "";
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
