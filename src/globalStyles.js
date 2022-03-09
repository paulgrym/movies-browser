import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

  html {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    background-color: ${({ theme }) => theme.colors.lightgrey};
    color: ${({ theme }) => theme.colors.black};
    padding: 16px;
  }
`;