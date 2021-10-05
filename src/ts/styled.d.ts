import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string,
    secondary: string,
    tertiary: string,
    quaternary: string,
    quinary: string,
    text: string,
    text_dark: string,
    text_neutral: string,
    text_bright: string,
  }
}
