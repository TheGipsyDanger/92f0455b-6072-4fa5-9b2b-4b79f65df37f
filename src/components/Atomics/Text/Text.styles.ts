import styled from 'styled-components/native';
import {css} from 'styled-components';
import {Text as TextBase} from 'react-native';
import {color, space, border, typography} from 'styled-system';
import {theme, type IFont, type IFontSizes, type IColors} from '~/styles/theme';

export default {
  Text: styled(TextBase)`
    ${space};
    ${color};
    ${typography};
    ${border};

    ${({textTransform}: {textTransform: string}) =>
      Boolean(textTransform) &&
      css`
        text-transform: ${textTransform};
      `}

    color: ${({color}: {color: keyof IColors}) => theme.colors[color]};

    ${({textDecoration}: {textDecoration: string}) =>
      Boolean(textDecoration) &&
      css`
        text-decoration: ${textDecoration};
      `}

    font-family: ${({font}: {font: keyof IFont}) => theme.fonts[font]};

    font-size: ${({size}: {size: keyof IFontSizes}) =>
      Number(theme.fontSizes[size])}px;
  `,
};
