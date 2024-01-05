import styled from 'styled-components/native';
import {Div, Text} from '~/components/Atomics';
import {theme} from '~/styles/theme';
import {variant} from 'styled-system';

export default {
  Container: styled(Div)(
    variant({
      variants: {
        primary: {
          backgroundColor: theme.colors.primary,
        },
        disable: {
          backgroundColor: theme.colors['grey-clean'],
        },
        link: {
          backgroundColor: 'transparent',
        },
        outline: {
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: theme.colors.primary,
        },
      },
    })
  ),
  Label: styled(Text)(
    variant({
      variants: {
        primary: {
          color: theme.colors['white'],
          fontFamily: theme.fonts.bold,
          fontSize: theme.fontSizes.xbig,
        },
        disable: {
          color: theme.colors['grey'],
          fontFamily: theme.fonts.bold,
          fontSize: theme.fontSizes.xbig,
        },
        link: {
          color: theme.colors['white'],
          fontFamily: theme.fonts.bold,
          fontSize: theme.fontSizes.xbig,
        },
        outline: {
          color: theme.colors['primary-clean'],
          fontFamily: theme.fonts.bold,
          fontSize: theme.fontSizes.xbig,
        },
      },
    })
  ),
};
