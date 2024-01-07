import styled from 'styled-components/native';
import {Text} from '~/components';

export default {
  Container: styled.View``,
  Label: styled(Text).attrs({
    mb: 3,
    font: 'bold'
  })``,
  File: styled(Text).attrs({
    my: 3,
    textAlign: 'center',
    color: 'grey',
    font: 'bold'
  })``
};
