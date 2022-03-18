import styled from "styled-components";
import { css } from "styled-components";
import { PeopleWrapper } from "./PeopleWrapper";

export const PeopleWrapperExpandable = styled(PeopleWrapper)`
  max-height:1000px;
  overflow: hidden;
  margin-bottom:0;

  ${({ isExpanded }) => isExpanded && css`
    max-height:none;
  `}
`

export const Container = styled.div`
  position: relative;
  text-align: center;

  &::before {
    content: "";
    width: 100%;
    height: 80%;
    position: absolute;
    left: 0;
    top: -80%;
    background: linear-gradient(180deg, rgba(245,245,250,0) 0%, rgba(245,245,250,1) 100%);

    ${({ isExpanded }) => isExpanded && css`
      height: 0%;
    `}
  }
`

export const Expander = styled.button`
  border:none;
  background:none;
  cursor: pointer;
  padding: 40px 0 2px;
  
  color: ${({ theme }) => theme.colors.darkergrey};
  font-size: 20px;

  &:hover{
    text-decoration: underline;
  }
`