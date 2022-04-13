import { useLocation } from "react-router-dom";
import {
  ClearContentButton,
  ClearContentIcon,
  SearchButton,
  SearchIcon,
  StyledSearch,
  StyledSearchContainer,
} from "./styled";
import {
  useReplaceQueryParameter,
  useQueryParameter,
} from "../../common/queryParameterHooks";
import { queryParameters } from "../../common/queryParameters";

export const Search = () => {
  const location = useLocation();
  const query = useQueryParameter(queryParameters.search);
  const replaceQueryParameter = useReplaceQueryParameter();

  const clearSearch = ({ target }) => {
    replaceQueryParameter([
      {
        key: queryParameters.search,
        value: target.value = "",
      },
      {
        key: queryParameters.page,
        value: 1,
      },
    ]);
  };

  const onInputChange = ({ target }) => {
    replaceQueryParameter([
      {
        key: queryParameters.search,
        value: target.value.trim() !== "" ? target.value : "",
      },
      {
        key: queryParameters.page,
        value: 1,
      },
    ]);
  };

  return (
    <>
      <StyledSearchContainer>
        <SearchButton
          htmlFor="search"
          disabled={
            location.pathname.indexOf("/movies/") === 0 ||
            location.pathname.indexOf("/people/") === 0
          }
        >
          <SearchIcon />
        </SearchButton>
        <StyledSearch
          id="search"
          value={query || ""}
          onChange={onInputChange}
          placeholder={`Search for ${location.pathname.includes("/movies")
            ? "movies…"
            : "people…"
            }`}
          disabled={
            location.pathname.startsWith("/movies/") ||
            location.pathname.startsWith("/people/")
          }
        />
        {query && (
          <ClearContentButton onClick={clearSearch}>
            <ClearContentIcon />
          </ClearContentButton>
        )}
      </StyledSearchContainer>
    </>
  );
};
