import styled from "styled-components";
import { ReactComponent as NoPersonIcon } from "../../images/no-profile-image.svg";


export const Wrapper = styled.article`
  background: ${({ theme }) => theme.colors.white};
  padding: 16px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  transition: transform 0.3s;
  text-align:center;
  word-break: break-word;

  &:hover {
    transform: scale(1.02);
  };

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    padding: 8px;
  }
`;

export const NoPersonImageIcon = styled(NoPersonIcon)`
  height: 64px;
  width: auto;
  color: ${({ theme }) => theme.colors.transparentWhite};

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    height: 52px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    height: 44px;
  }
`;

export const NoPersonImage = styled.div`
  flex-shrink:0;
  height: 252px;
  background: ${({ theme }) => theme.colors.darkgrey};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    height: 210px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    height: 178px;
  }
`;

export const PersonImage = styled.img`
  height: 252px;
  border-radius: 5px;
  object-fit: cover;
  object-position: top;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    height: 210px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    height: 178px;
  }
`;

export const PersonDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`

export const PersonFullName = styled.p`
  margin: 12px 0 0;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 16px;
  }
`;

export const PersonFunction = styled.p`
  color: ${({ theme }) => theme.colors.darkergrey};
  margin: 8px 0 0;
  font-size: 18px;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 16px;
    line-height: 1.3;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 13px;
    line-height: 1.3;
  }
`