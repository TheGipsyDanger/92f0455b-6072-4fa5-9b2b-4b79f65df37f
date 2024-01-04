import styled from 'styled-components/native';
import {css} from 'styled-components';
import {Text as TextBase} from 'react-native';
import {color, space, border, typography} from 'styled-system';
import {theme, IFont, IFontSizes} from '~/styles/theme';

export default {
  Text: styled(TextBase)`
    ${space};
    ${color};
    ${typography};
    ${border};

    ${({textTransform}) =>
      textTransform &&
      css`
        text-transform: ${textTransform};
      `}

    ${({textDecoration}) =>
      textDecoration &&
      css`
        text-decoration: ${textDecoration};
      `}

    font-family: ${({font}: {font: keyof IFont}) =>
      theme.fonts[font] || 'Avenir'};

    font-size: ${({size}: {size: keyof IFontSizes}) =>
      Number(theme.fontSizes[size])}px;
  `,
};
