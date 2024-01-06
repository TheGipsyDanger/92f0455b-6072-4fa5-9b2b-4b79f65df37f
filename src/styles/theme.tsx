import * as React from 'react';
import {ThemeProvider as StyledThemeProvider} from 'styled-components';
import {withChildren} from '~/utils';
import {metrics} from '../styles/metrics';
import {RFValue} from 'react-native-responsive-fontsize';

export const theme = {
  space: [
    ...[
      0,
      RFValue(4),
      ...Array.from({length: 8}, (_, index) => RFValue((index + 1) * 8)),
    ],
  ],
  fonts: {
    regular: 'Inter_400Regular',
    light: 'Inter_300Light',
    bold: 'Inter_700Bold',
  },
  fontSizes: {
    big: 20,
    xbig: 16,
    normal: 13,
    small: 9,
    xsmall: 11,
  },
  colors: {
    white: 'white',
    black: 'black',
    transparent: 'transparent',
    primary: '#FF6B01',
    'primary-clean': '#FD9400',
    yellow: '#FFB800',
    red: '#FF0000',
    green: '#1E9400',
    'green-clean': '#A5FF32',
    blue: '#142A96',
    'blue-clean': '#10C2E9',
    grey: '#BBBBBB',
    'grey-clean': '#EEEEEE',
    'grey-clean-200': '#BBBBBB',
    'grey-clean-300': '#3F3F3F',
    'black-clean': '#111111',
  },
  raddi: {
    light: 4,
    medium: 8,
    big: 16,
    circle: 100,
  },
  shadows: {
    input: '0px 0px 8px rgba(0, 0, 0, 0.15)',
  },
};

export type IFont = typeof theme.fonts;
export type IFontSizes = typeof theme.fontSizes;
export type IColors = typeof theme.colors;
export type IRadius = typeof theme.raddi;

export const ThemeProvider = ({children}: withChildren) => (
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
);
