import { createGlobalStyle } from "styled-components";
import { device } from "./MediaQueries";
export const GlobalStyles = createGlobalStyle`
 *,
  *::after,
  *::before {
    box-sizing: inherit;    
    margin: 0;
    padding: 0;
  }
  html{
      box-sizing: border-box;
      @media ${device.desktop}{
      font-size: 68.5%;
      }
      @media ${device.laptopL}{
      font-size: 62.5%;
      }
      @media ${device.laptop}{
      font-size: 56.5%;
      } 
      @media ${device.tablet}{
      font-size: 50.5%;
      } 
      @media ${device.mobileL}{
      font-size: 44.5%;
      } 
      @media ${device.mobileM}{
      font-size: 38.5%;
      }
      @media ${device.mobileS}{
      font-size: 32.5%;
      }
  }
  body {
    font-family: 'Nunito Sans', sans-serif;   
    transition:.3s all;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
`;
