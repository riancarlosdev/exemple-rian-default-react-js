/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
import { theme } from './index';

export type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}