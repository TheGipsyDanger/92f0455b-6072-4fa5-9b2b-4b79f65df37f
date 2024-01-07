import styled from 'styled-components/native';
import {KeyboardAvoidingView} from 'react-native';
import {color, type BackgroundColorProps, backgroundColor} from 'styled-system';

export default {
  KeyboardAvoidStyled: styled(KeyboardAvoidingView)<BackgroundColorProps>`
    ${color};
    ${backgroundColor};
    flex: 1;
  `,
};
