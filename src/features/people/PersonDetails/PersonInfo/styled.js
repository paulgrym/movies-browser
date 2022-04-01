import styled from "styled-components";
import { NoPersonImage } from "../../../../common/PersonTile/styled";

export const PersonTile = styled.article`
  background: ${({ theme }) => theme.colors.white};
  padding: 40px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  overflow: hidden;
  margin-bottom: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    padding: 28px;
    margin-bottom: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    padding: 16px;
    display: flex;
    flex-direction: column;
    margin-bottom: 21px;
  }
`;

export const NoPersonInfoImage = styled(NoPersonImage)`
  width: 312px;
  height: 468px;
  margin-right: 40px;
  float: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    width: 180px;
    height: 270px;
    margin-right: 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    width: 114px;
    height: 170px;
    margin: 0 16px 16px 0;
  }
`;

export const PersonImage = styled.img`
  width: 312px;
  border-radius: 5px;
  margin-right: 40px;
  float: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    width: 180px;
    height: unset;
    margin-right: 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    width: 114px;
    margin: 0 16px 16px 0;
  }
`;

export const Title = styled.h3`
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
  margin: 0 0 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    font-weight: 500;
    font-size: 26px;
    line-height: 1.3;
    margin: 0 0 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    font-size: 16px;
    margin: 0 0 4px;
  }
`;

export const DetailedInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 18px;
  line-height: 1.2;
  margin: 8px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    font-size: 15px;
    line-height: 1.2;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    font-size: 12px;
    line-height: 1.3;
  }
`;

export const Key = styled.span`
  color: ${({ theme }) => theme.colors.stormGray};
  margin-right: 10px;
`;

export const Value = styled.div``;
export const Wrapper = styled.div``;

export const Content = styled.div`
  margin-bottom: 24px;
`;

export const Description = styled.p`
  font-size: 20px;
  line-height: 1.6;
  margin:0;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
    font-size: 14px;
  }
`;