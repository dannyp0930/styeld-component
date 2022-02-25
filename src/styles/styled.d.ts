// type 선언

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      main: string;
      secondary: string;
    };
  }
}