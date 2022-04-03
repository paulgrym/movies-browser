import styled from "styled-components";
import { ReactComponent as SearchSVG } from "../../images/search.svg";
import { ReactComponent as ClearSVG } from "../../images/clear.svg";

export const SearchBox = styled.div`
  display: flex;
  width: 432px;
  height: 48px;
  color: ${({ theme }) => theme.colors.waterloo};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 33px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 100%;
  }
`;

export const SearchIconContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 19px 0 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin: 0 10px 0 18px;
  }
`;

export const SearchIcon = styled(SearchSVG)`
  width: 24px;
  height: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 20px;
    height: 20px;
  }
`;

export const StyledSearchContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const StyledSearch = styled.input`
  width: 100%;
  padding: 12px 0;
  font-size: 16px;
  border-style: none;
  border-radius: 33px;

  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gallery};
    opacity: 0.6;
  }

  &:disabled::placeholder {
    color: ${({ theme }) => theme.colors.silver};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 100%;
  }
`;

export const ClearContentButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0 24px 0 19px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const ClearContentIcon = styled(ClearSVG)`
  width: 24px;
  height: 24px;
  fill: ${({ theme }) => theme.colors.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 16px;
    height: 16px;
  }
`;
