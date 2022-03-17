import styled from "styled-components";

export const StyledSearch = styled.input`
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