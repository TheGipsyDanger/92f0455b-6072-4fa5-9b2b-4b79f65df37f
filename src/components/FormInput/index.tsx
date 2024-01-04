import * as React from 'react';
import {Div, Input, Text} from '~/components/Atomics';
import {IFormInput} from '~/components/FormInput/FormInput.types';
import S from './FormInput.styles';

export const FormInput = ({
  label,
  prepend,
  append,
  placeholder,
  onChange,
  value,
  onBlur,
  trigger,
  name,
  errors,
  ...rest
}: IFormInput.IView) => {
  return (
    <Div {...rest} testID={`FormInput`}>
      {label}
      <S.Container
        borderColor={errors?.[name]?.message ? 'red' : 'transparent'}
      >
        {prepend}
        <S.Content flex={1}>
          <Input
            placeholder={placeholder}
            value={value}
            onBlur={onBlur}
            onChange={(text: string) => console.log({text})}
            onChangeText={(text: string) => {
              onChange(text);
              trigger(name);
            }}
          />
        </S.Content>
        {append}
      </S.Container>
      <Text mt={1} color="red">
        {errors?.[name]?.message || ''}
      </Text>
    </Div>
  );
};
