import {createGlobalStyle, css} from "styled-components";

const cssReset = css`
  // Based on: https://www.joshwcomeau.com/css/custom-css-reset/
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html,
  body {
    height: 100%;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  ul,
  ol {
    padding: 0;
  }

  ul {
    list-style-type: none;
  }

  #root {
    isolation: isolate;
    height: 100%;
  }
`;

const typography = css`
  html {
    font-size: 10px;
  }

  body {
    font-family: "Poppins", "Roboto", "Helvetica Neue", sans-serif;
    -moz-osx-font-smoothing: grayscale;
    color: ${({theme}) => theme.colors.text};
  }

  h1,
  h2,
  h3,
  h4,
  p,
  a {
    white-space: pre-line;
  }

  h1,
  h2,
  h3,
  h4 {
    margin: 2rem 0;
    line-height: 1.2;
  }

  h1 {
    font-size: 5rem;
  }

  h2 {
    font-size: 3.5rem;
  }

  h3 {
    font-size: 2.2rem;
  }

  p {
    font-size: 1.6rem;
    margin-bottom: 1.6rem;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
    font-size: 1.6rem;
  }

  a {
    color: inherit;
  }

  hr {
    border: 0;
    border-bottom: 1px solid grey;
    margin: 4rem 0;
  }
`;

export const GlobalStyle = createGlobalStyle`
${cssReset}
${typography}

.visually-hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;
