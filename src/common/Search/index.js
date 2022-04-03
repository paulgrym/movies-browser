import { useLocation } from "react-router-dom";
import {
  ClearContentButton,
  ClearContentIcon,
  SearchBox,
  SearchIcon,
  SearchIconContainer,
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

  const clearInputContent = ({ target }) => {
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
    <SearchBox>
      <SearchIconContainer>
        <SearchIcon />
      </SearchIconContainer>
      <StyledSearchContainer>
        <StyledSearch
          value={query ? query : ""}
          onChange={onInputChange}
          placeholder={
            `Search for ${location.pathname === "/movies" ||
              location.pathname.indexOf("/movies/") === 0
              ? "movies..."
              : "people..."
            }`
          }
          disabled={
            location.pathname.indexOf("/movies/") === 0 ||
            location.pathname.indexOf("/people/") === 0
          }
        />
      </StyledSearchContainer>
      {query &&
        <ClearContentButton onClick={clearInputContent}>
          <ClearContentIcon />
        </ClearContentButton>
      }
    </SearchBox>
  );
};

