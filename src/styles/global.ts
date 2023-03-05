import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;

    margin: 0;
    padding: 0;
    
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;

    color: #FFF;
    background: #fff;
  }

  body, input, button {
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
