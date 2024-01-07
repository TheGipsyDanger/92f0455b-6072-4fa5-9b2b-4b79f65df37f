import * as React from 'react';
import S from '~/components/Atomics/Input/Input.styles';
import {type IInput} from '~/components/Atomics/Input/Input.types';
import {useInput} from './Input.model';

export const Input = (props: IInput.IView) => {
  const {
    type,
    disabled,
    onChange,
    forwardRef,
    handleValue,
    handleChange,
    onBlur,
    font = 'regular',
    size = 'xsmall',
    onChangeText,
    value,
    autoFocus = false,
    ...rest
  } = useInput(props);
  return (
    <S.Input
      {...rest}
      ref={forwardRef}
      placeholderTextColor="#585858"
      font={font}
      onBlur={onBlur}
      autoFocus={autoFocus}
      color={'#141313'}
      size={size}
      value={value}
      editable={!disabled}
      onChangeText={onChangeText}
      returnKeyType={'next'}
      autoCapitalize="none"
      autoCompleteType="off"
      autoCorrect={false}
      keyboardType={type === 'number' ? 'numeric' : undefined}
      secureTextEntry={type === 'password'}
      opacity={disabled ? 0.5 : 1}
    />
  );
};
