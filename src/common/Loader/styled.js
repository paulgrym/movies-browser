import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.div`
  margin: 120px auto 24px;
  width: 91px;
  height: 91px;
  border: 12px solid ${({ theme }) => theme.colors.loaderGrey};
  border-right-color: ${({ theme }) => theme.colors.black};
  border-radius: 50%;
  animation: LoadingSpinner 1.2s linear infinite;

    @keyframes LoadingSpinner {
    to {transform: rotate(360deg);}
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
      margin: 60px auto 24px;
      width: 70px;
      height: 70px;
      border-width: 9px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}){
      margin: 24px auto 16px;
      width: 35px;
      height: 35px;
      border-width: 5px;
    }
`