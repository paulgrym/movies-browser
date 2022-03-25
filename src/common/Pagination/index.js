import { Arrow, Button, ButtonText, StyledPagination, PageText, PageInfo } from "./styled";

export const Pagination = () => {
  return (
    <StyledPagination>
      <Button back="true" disabled>
        <Arrow back="true" />
        <Arrow back="true" mobile="true" />
        <ButtonText>First</ButtonText>
      </Button>

      <Button back="true" disabled>
        <Arrow back="true" />
        <ButtonText>Previous</ButtonText>
      </Button>

      <PageInfo>
        Page
        <PageText>1</PageText>
        of
        <PageText>500</PageText>
      </PageInfo>

      <Button>
        <ButtonText>Next</ButtonText>
        <Arrow />
      </Button>

      <Button>
        <ButtonText>Last</ButtonText>
        <Arrow />
        <Arrow mobile="true" />
      </Button>
    </StyledPagination>
  );
};