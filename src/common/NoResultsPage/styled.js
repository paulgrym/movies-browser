import styled from "styled-components";
import { ReactComponent as NoResults } from "../../images/no-results.svg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NoResultsImage = styled(NoResults)`

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    height: 320px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    height: 169px;
  }
`;
