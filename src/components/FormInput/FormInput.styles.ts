import styled from 'styled-components/native';
import {Div} from '../Atomics';
import {theme} from '~/styles/theme';

export default {
  Container: styled(Div).attrs({
    height: 55,
    borderWidth: 1,
  })`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: ${theme.raddi.medium}px;
    background-color: ${theme.colors.white};
  `,
  Content: styled(Div).attrs({
    height: 55,
    px: 3,
  })`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `,
};
