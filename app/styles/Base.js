import { css } from "styled-components";

export const base = css`
  html,
  body,
  #app {
    height: 100%;
    width: 100%;
  }

  html {
    font-family: Arial, Helvetica, sans-serif;
  }
  ul {
    list-style: none;
  }

  ul,
  h3,
  h6,
  h5,
  p {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

export default base;
