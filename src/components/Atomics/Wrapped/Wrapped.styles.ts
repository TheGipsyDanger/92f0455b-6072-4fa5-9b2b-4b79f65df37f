import styled from 'styled-components/native';
import {css} from 'styled-components';
import {theme, IRadius, IColors} from '~/styles/theme';
import {
  border,
  boxShadow,
  color,
  flexbox,
  space,
  typography,
  backgroundColor,
  position,
  borderColor,
} from 'styled-system';

export default {
  Wrapped: styled.View`
    ${space};
    ${color};
    ${position};
    ${typography};
    ${border};
    ${flexbox};
    ${boxShadow};
    ${borderColor};
    ${backgroundColor};

    ${({boxShadow: shadow}) =>
      shadow &&
      css`
        elevation: 5;
      `}

    border-color: ${({borderColor}: {borderColor: keyof IColors}) =>
      theme.colors[borderColor]};

    ${({radius}) =>
      radius &&
      css`
        border-radius: ${theme.raddi[radius as keyof IRadius]}px;
      `}

    ${({center}) =>
      center &&
      css`
        align-items: center;
        justify-content: center;
      `}
  `,
};
