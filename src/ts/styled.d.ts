import 'styled-components';
import Theme from './settings/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
