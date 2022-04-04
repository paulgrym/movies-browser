import styled from "styled-components";
import { ReactComponent as SearchSVG } from "../../images/search.svg";
import { ReactComponent as ClearSVG } from "../../images/clear.svg";

export const StyledSearchContainer = styled.div`
  width: 432px;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 100%;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 24px;
  background-color: transparent;
  border: none;
  display: flex;
  padding: 0;

  &:disabled {
    opacity: 0.3;
  }
`;

export const SearchIcon = styled(SearchSVG)`
  width: 24px;
  height: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 16px;
    height: 16px;
  }
`;

export const StyledSearch = styled.input`
  width: 100%;
  padding: 12px 60px 12px 60px;
  font-size: 16px;
  border-style: none;
  border-radius: 33px;

  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gallery};
    opacity: 0.3;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.waterloo};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 13px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 100%;
  }
`;

export const ClearContentButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 24px;
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
