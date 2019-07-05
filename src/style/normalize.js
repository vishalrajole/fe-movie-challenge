import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.BASE_BODY_BG};
    color: ${props => props.theme.BASE_TEXT};
    margin: 0;
    font-size: ${props => props.theme.BASE_FONT_SIZE};
    font-family: "Trebuchet MS";
  }
  h4, p {
    margin: 0;
  }
`;

export default GlobalStyle;
