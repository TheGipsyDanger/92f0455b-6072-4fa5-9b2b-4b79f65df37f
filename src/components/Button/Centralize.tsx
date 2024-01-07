import * as React from 'react';
import {Div, Conditional, Icon} from '~/components/Atomics';
import {ActivityIndicator} from 'react-native';
import {type IButton} from './Button.types';
import S from './Button.styles';

export const Centralize = ({
  onPress,
  isLoading,
  label,
  ...rest
}: IButton.IView) => {
  return (
    <Div
      onPress={rest.variant === 'disable' ? undefined : onPress}
      testID={'Button'}
    >
      <S.Container {...rest} center height={55} radius={'medium'}>
        <Conditional render={isLoading}>
          <ActivityIndicator color="white" />
          <Div flexDirection="row" center>
            <S.Label mr={2} variant={rest.variant} testID={'Button:Label'}>
              {label}
            </S.Label>
            <Icon name="upload" size={20} color="primary" />
          </Div>
        </Conditional>
      </S.Container>
    </Div>
  );
};
