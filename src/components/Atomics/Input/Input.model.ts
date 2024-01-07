import {type IInput} from '~/components/Atomics/Input/Input.types';

export const useInput = (props: IInput.IView): IInput.IModel => {
  const {onChangeText} = props;

  const handleChange = (value: string) => onChangeText(value);

  return {
    ...props,
    handleChange
  };
};
