import { Section } from "../Section"
import { NoResultsImage, Wrapper } from "./styled";



export const NoResultsPage = () => {
  return (
    <Section
      title={"Sorry, there are no results for “Muan”"}
      body={
        <Wrapper>
          <NoResultsImage />
        </Wrapper>
      }
    />
  );
}