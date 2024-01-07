import {ScrollView} from 'react-native';
import styled from 'styled-components/native';
import {Text, Div} from '~/components';
import {theme} from '~/styles';

export default {
  Label: styled(Text).attrs({
    mb: 3,
    font: 'bold',
  })``,
  Container: styled(Div).attrs({
    borderWidth: 1,
    p: 3,
  })`
    min-height: 55px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: ${theme.raddi.medium}px;
    background-color: ${theme.colors.white};
    border-color: ${theme.colors.grey};
  `,
};
