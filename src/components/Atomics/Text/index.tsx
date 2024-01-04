import * as React from 'react';
import {Platform} from 'react-native';
import {IText} from '~/components/Atomics/Text/Text.types';
import S from '~/components/Atomics/Text/Text.styles';

export const Text = ({
  color = 'black',
  font = 'regular',
  size = 'normal',
  ...props
}: IText.IView) => <S.Text {...props} font={font} color={color} size={size} />;
