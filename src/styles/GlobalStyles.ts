import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    margin: 0;
    padding: 0;
    background: #f1f4f9;
    color: #222;
  }

  h1 {
    font-size: 2rem;
    text-align: center;
    color: #1a1a1a;
    margin-top: 1rem;
    margin-bottom: 1.2rem;
    letter-spacing: -0.5px;
  }

  p {
    margin: 0.25rem 0;
  }
`;
