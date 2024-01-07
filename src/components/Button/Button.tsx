import * as React from 'react';
import {Div, Conditional} from '~/components/Atomics';
import {ActivityIndicator} from 'react-native';
import {type IButton} from './Button.types';
import S from './Button.styles';

export const Button = ({onPress, isLoading, label, ...rest}: IButton.IView) => {
  return (
    <Div
      onPress={rest.variant === 'disable' ? undefined : onPress}
      testID={'Button'}
    >
      <S.Container {...rest} center height={55} radius={'medium'}>
        <Conditional render={isLoading}>
          <ActivityIndicator color="white" />
          <S.Label variant={rest.variant} testID={'Button:Label'}>
            {isLoading ? <ActivityIndicator color="white" /> : label}
          </S.Label>
        </Conditional>
      </S.Container>
    </Div>
  );
};
