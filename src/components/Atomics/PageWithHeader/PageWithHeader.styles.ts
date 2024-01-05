import styled from 'styled-components/native';
import {KeyboardAvoidingView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {color, BackgroundColorProps, backgroundColor} from 'styled-system';

export default {
  KeyboardAvoidStyled: styled(KeyboardAvoidingView)<BackgroundColorProps>`
    ${color};
    ${backgroundColor};
    flex: 1;
  `,
};
