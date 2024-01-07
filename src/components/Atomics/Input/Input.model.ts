import {type IInput} from '~/components/Atomics/Input/Input.types';

export const useInput = (props: IInput.IView): IInput.IModel => {
  const {value, onChangeText} = props;

  const handleValue = value;

  const handleChange = (value: string) => onChangeText?.(value);

  return {
    ...props,
    handleValue,
    handleChange
  };
};
