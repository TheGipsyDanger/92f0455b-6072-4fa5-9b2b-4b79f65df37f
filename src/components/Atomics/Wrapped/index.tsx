import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import {type IWrapped} from '~/components/Atomics/Wrapped/Wrapped.types';
import S from '~/components/Atomics/Wrapped/Wrapped.styles';

export const Wrapped = ({
  children,
  bg = 'transparent',
  ...props
}: IWrapped.IView) => {
  const as = props.onPress != null && TouchableOpacity;
  return (
    <S.Wrapped {...{as}} {...props} bg={bg}>
      {children}
    </S.Wrapped>
  );
};
