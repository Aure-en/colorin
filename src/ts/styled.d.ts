import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string,
    secondary: string,
    tertiary: string,
    quaternary: string,
    quinary: string,
    text: string,
    neutral_text: string,
    neutral_silent: string,
  }
}
