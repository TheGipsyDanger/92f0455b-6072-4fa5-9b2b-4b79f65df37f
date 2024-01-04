import styled from 'styled-components/native';
import {TextInput} from 'react-native';
import {IInput} from '~/components/Atomics/Input/Input.types';
import {color, space, border, boxShadow} from 'styled-system';

export default {
  Input: styled(TextInput)<IInput.IView>`
    ${space};
    ${color};
    ${border};
    ${boxShadow};
    color: #141313;
  `,
};
