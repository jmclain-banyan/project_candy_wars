import {
  createGlobalStyle,
  GlobalStyleComponent,
  DefaultTheme,
} from "styled-components";
import { colors } from './colors';

const GlobalStyle: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`
    * { box-sizing: border-box }
    body {
        margin: 0;
        padding: 0.2rem calc((100vw - 750px) / 2);
        background: ${colors.backgroundGrey};
        font-family: 'Courier New', Courier, monospace;
    }
`;

export default GlobalStyle;
