import styled from "styled-components";
import { ReactComponent as VideoSVG } from "../Header/Icons/video.svg";
import { ReactComponent as SearchSVG } from "../Header/Icons/search.svg";

export const Wrapper = styled.header`
  max-width: 1920px;
  margin: 0 auto;
  background-color: #18181b;
  color: white;
  margin-bottom: 58px;
`;
export const Content = styled.div`
  max-width: 1260px;
  margin: 0 auto;
  padding: 23px;
  display: flex;
  justify-content: space-between;
`;
export const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 104px;
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
`;
export const Link = styled.a`
  display: flex;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
`;
export const VideoIcon = styled(VideoSVG)`
  width: 40px;
  height: 40px;
  margin-right: 16px;
`;
export const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;
export const List = styled.ul`
  list-style: none;
  padding-left: 0px;
  margin: 0;
  display: flex;
`;
export const Item = styled.li`
  margin-right: 16px;
  cursor: pointer;
`;
export const Name = styled.a`
  font-size: 14px;
  padding: 8px 24px;

  &:hover {
    border: 1px solid white;
    margin: -1px;
    border-radius: 24px;
  }
`;
export const SearchBox = styled.div`
  position: relative;
`;

export const SearchIcon = styled(SearchSVG)`
  position: absolute;
  top: 20%;
  width: 24px;
  height: 24px;
  margin-left: 19px;
`;

export const Search = styled.input`
  width: 432px;
  padding: 12px 0 12px 60px;
  border-radius: 33px;
  background-color: white;
  font-size: 16px;
  border-style: none;
`;
