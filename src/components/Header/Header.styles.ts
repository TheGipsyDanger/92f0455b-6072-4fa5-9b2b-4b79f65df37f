import styled from 'styled-components/native';
import {Text, Div} from '~/components/Atomics';

export default {
  Title: styled(Text).attrs({
    size: 'xbig',
    font: 'bold'
  })``,
  Action: styled(Div).attrs({
    center: true
  })`
    flex: 1;
    border-bottom-width: 1px;
  `,
  Label: styled(Text).attrs({
    size: 'normal',
    font: 'bold'
  })``
};
