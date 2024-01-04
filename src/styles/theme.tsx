import * as React from 'react';
import {ThemeProvider as StyledThemeProvider} from 'styled-components';
import {withChildren} from '~/utils';
import {metrics} from '../styles/metrics';

const {defaultSpace} = metrics;

export const theme = {
  space: [
    0,
    defaultSpace() / 2,
    defaultSpace(),
    defaultSpace(2),
    defaultSpace(3),
    defaultSpace(4),
    defaultSpace(5),
    defaultSpace(6),
    defaultSpace(7),
    defaultSpace(8),
    defaultSpace(9),
    defaultSpace(10),
    defaultSpace(11),
    defaultSpace(12),
  ],
  fonts: {},
  fontSizes: {
    normal: 13,
    small: 11,
  },
  colors: {
    white: 'white',
    black: 'black',
  },
  raddi: {},
  shadows: {},
};

export type IFont = typeof theme.fonts;
export type IFontSizes = typeof theme.fontSizes;
export type IColors = typeof theme.colors;
export type IRadius = typeof theme.raddi;

export const ThemeProvider = ({children}: withChildren) => (
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
);
