import { css } from "@emotion/react";

const globalStyle = css`
  @font-face {
    font-family: "SpoqaHanSansNeo-Regular";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  * {
    font-family: "SpoqaHanSansNeo-Regular";
    margin: 0;
    padding: 0;
  }

  button {
    background: inherit;
    border: none;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    overflow: visible;
    cursor: pointer;
  }

  button:focus,
  input:focus,
  textarea:focus {
    outline: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default globalStyle;
