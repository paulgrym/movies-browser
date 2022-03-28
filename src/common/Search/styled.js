import styled from "styled-components";

export const StyledSearch = styled.input`
  width: 432px;
  height: 48px;
  padding: 12px 0 12px 60px;
  border-radius: 33px;
  color: ${({theme}) => theme.colors.waterloo};
  background-color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  border-style: none;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gallery};
    opacity: 0.6;
  }

  &:disabled::placeholder {
    color: ${({ theme }) => theme.colors.silver};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    height: 44px;
    font-size: 13px;
    padding: 14px 0 14px 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 100%;
  }
`;
