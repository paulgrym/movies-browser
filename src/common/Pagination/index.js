import { useReplaceQueryParameter } from "../queryParameterHooks";
import { queryParameters } from "../queryParameters";
import { Arrow, Button, ButtonText, StyledPagination, PageText, PageInfo } from "./styled";

export const Pagination = ({ totalPages, page }) => {
  const replaceQueryParameter = useReplaceQueryParameter();

  const onPagerClick = (pagerActionValue) => {
    replaceQueryParameter([
      {
        key: queryParameters.page,
        value: pagerActionValue,
      },
    ]);
  };

  return (
    <StyledPagination>
      <Button back="true" disabled={page === 1} onClick={() => onPagerClick(1)}>
        <Arrow back="true" />
        <Arrow back="true" mobile="true" />
        <ButtonText>First</ButtonText>
      </Button>

      <Button back="true" disabled={page === 1} onClick={() => onPagerClick(page - 1)}>
        <Arrow back="true" />
        <ButtonText>Previous</ButtonText>
      </Button>

      <PageInfo>
        Page
        <PageText>{page}</PageText>
        of
        <PageText>{totalPages}</PageText>
      </PageInfo>

      <Button disabled={page === totalPages} onClick={() => onPagerClick(page + 1)}>
        <ButtonText>Next</ButtonText>
        <Arrow />
      </Button>

      <Button disabled={page === totalPages} onClick={() => onPagerClick(totalPages)}>
        <ButtonText>Last</ButtonText>
        <Arrow />
        <Arrow mobile="true" />
      </Button>
    </StyledPagination>
  );
};