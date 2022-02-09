import {
  createGlobalStyle,
  GlobalStyleComponent,
  DefaultTheme,
} from "styled-components";

const GlobalStyle: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`
    * { box-sizing: border-box }
    body {
        margin: 0;
        padding: 0.2rem calc((100vw - 750px) / 2);
        background: #666;
    }
`;

export default GlobalStyle;
