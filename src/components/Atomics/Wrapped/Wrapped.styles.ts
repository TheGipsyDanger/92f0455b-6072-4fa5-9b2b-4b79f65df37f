import styled from 'styled-components/native';
import {css} from 'styled-components';
import {theme, IRadius} from '~/styles/theme';
import {
  border,
  boxShadow,
  color,
  flexbox,
  space,
  typography,
  backgroundColor,
} from 'styled-system';

export default {
  Wrapped: styled.View`
    ${space};
    ${color};
    ${typography};
    ${border};
    ${flexbox};
    ${boxShadow};
    ${backgroundColor};

    ${({boxShadow: shadow}) =>
      shadow &&
      css`
        elevation: 5;
      `}

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
