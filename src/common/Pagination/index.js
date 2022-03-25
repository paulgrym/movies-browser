import { Arrow, Button, ButtonText, StyledPagination, PageText, PageInfo } from "./styled";

export const Pagination = () => {
  return (
    <StyledPagination>
      <Button back disabled>
        <Arrow back />
        <Arrow back mobile />
        <ButtonText>First</ButtonText>
      </Button>

      <Button back disabled>
        <Arrow back />
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
        <Arrow mobile />
      </Button>
    </StyledPagination>
  );
};