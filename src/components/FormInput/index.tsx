import * as React from 'react';
import {Div, Input, Text} from '~/components/Atomics';
import {type IFormInput} from '~/components/FormInput/FormInput.types';
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
  autoFocus = false,
  ...rest
}: IFormInput.IView) => {
  return (
    <Div {...rest} testID={'FormInput'}>
      {label}
      <S.Container
        borderColor={errors?.[name]?.message != null ? 'red' : 'grey'}
      >
        {prepend != null && <Div ml={3}>{prepend}</Div>}
        <S.Content flex={1}>
          <Input
            testID="FormInput:Input"
            autoFocus={autoFocus}
            placeholder={placeholder}
            value={value}
            onBlur={onBlur}
            onChangeText={(text: string) => {
              onChange(text);
              // @ts-expect-error
              // eslint-disable-next-line @typescript-eslint/no-floating-promises
              trigger(name);
            }}
          />
        </S.Content>
        {append != null && <Div mr={3}>{append}</Div>}
      </S.Container>
      <Text mt={1} testID="FormInput:Error" color="red">
        {errors?.[name]?.message ? errors?.[name]?.message : ''}
      </Text>
    </Div>
  );
};
