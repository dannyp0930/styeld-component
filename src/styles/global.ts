// 페이지 전체에 적용

import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    body {
      background: ${theme.colors.background};
      text-align: center;
      margin: 0;
      font-family: Nanum Gothic, Maru Buri, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    code {
      font-family: D2coding, source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
  `}
  `

export default GlobalStyle;