import {useRef} from 'react';
import {IInput} from '~/components/Atomics/Input/Input.types'
import {mask as masker, unMask} from 'remask'
import {TextInput} from 'react-native';

export const useInput = (props: IInput.IModelProps): IInput.IModel => {
  const textInputRef = useRef<TextInput>();

  var ref = {};

  if (props.label) {
    ref = {
      [`${props.label}`]: textInputRef,
    };
  }

  const {mask, value, onChange} = props;

  const handleValue = mask ? masker(value || '', mask) : value;

  const handleChange = (value: string) =>
    onChange && onChange(mask ? unMask(masker(value, mask), mask) : value);

  return {
    ...props,
    //@ts-ignore
    forwardRef: ref[props.label],
    handleValue,
    handleChange,
  }
}