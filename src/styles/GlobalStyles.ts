import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    background: #f4f4f9;
    color: #333;
  }

  h1, h3 {
    margin: 0;
  }

  button {
    cursor: pointer;
  }
`;
