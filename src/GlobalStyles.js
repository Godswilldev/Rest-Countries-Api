import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 *,
  *::after,
  *::before {
    box-sizing: inherit;    
    margin: 0;
    padding: 0;
  }
  html{
      font-size: 62.5%;
      box-sizing: border-box;
  }
  body {
    font-family: 'Nunito Sans', sans-serif;   
    transition:.3s all;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
`;
