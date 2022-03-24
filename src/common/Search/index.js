
import { useLocation } from "react-router-dom";
import { StyledSearch } from "./styled";
import { useReplaceQueryParameter, useQueryParameter } from "./queryParameterHooks";
import { queryParameters } from "./queryParameters";

export const Search = () => {
  const location = useLocation();
  const query = useQueryParameter(queryParameters.search);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParameter([
      {
        key: queryParameters.search,
        value: target.value.trim(),
      },
      {
        key: queryParameters.page,
        value: 1,
      },
    ]);
  };

  return (
    <StyledSearch
      value={query ? query : ""}
      onChange={onInputChange}
      placeholder={`Search for ${
        location.pathname === "/movies" ||
        location.pathname.indexOf("/movies/") === 0
          ? "movies..."
          : "people..."
      }
      `}
      disabled={
        location.pathname.indexOf("/movies/") === 0 ||
        location.pathname.indexOf("/people/") === 0
      }
    />
  );
};
