import styled from "styled-components";
import { ReactComponent as VideoSVG } from "../Header/Icons/video.svg";
import { ReactComponent as SearchSVG } from "../Header/Icons/search.svg";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export const Wrapper = styled.header`
  /* max-width: 1920px;
  margin: 0 auto; */
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 58px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin-bottom: 24px;
  }
`;

export const Content = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 23px;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    grid-gap: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    justify-content: space-between;
    margin-bottom: 20px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -1.5px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 13px;
    margin-right: 19px;
    letter-spacing: 0.5px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    justify-content: space-between;
  }
`;

export const VideoIcon = styled(VideoSVG)`
  width: 40px;
  height: 40px;
  margin-right: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin-right: 8px;
    width: 17px;
    height: 17px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0px;
  margin: 0;
`;

export const Item = styled.li`
  margin-right: 16px;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin-right: 12px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 14px;
  font-weight: 600;
  padding: 14px 24px;
  text-transform: uppercase;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  transition: 0.5s;
  transition-property: color, border;

  &:hover {
    color: ${({ theme }) => theme.colors.yellow};
  }

  &.active {
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: 24px;
  }

  &.active:hover {
    border: 1px solid ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors.yellow};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 12px;
    padding: 8px 12px;
    border-radius: 29px;
  }
`;

export const SearchBox = styled.div`
  position: relative;
`;

export const SearchIcon = styled(SearchSVG)`
  position: absolute;
  top: 25%;
  width: 24px;
  height: 24px;
  margin-left: 19px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 16px;
    height: 16px;
    margin-left: 16px;
    top: 30%;
  }
`;

export const Search = styled.input`
  width: 432px;
  height: 48px;
  padding: 12px 0 12px 60px;
  border-radius: 33px;
  background-color: white;
  font-size: 16px;
  border-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    height: 44px;
    font-size: 13px;
    padding: 14px 0 14px 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 100%;
  }
`;