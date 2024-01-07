import {type TextInputProps} from 'react-native';

import {
  type IWrappedSystem,
  type ITriggerFormInput,
  type IFormErrosAccepeted,
  type IFormInputNameAccepeted
} from '~/utils';

export namespace IFormInput {
  export interface IView
    extends TextInputProps,
      Omit<IWrappedSystem, 'textAlign' | 'children' | 'verticalAlign'> {
    errors: IFormErrosAccepeted;
    name: IFormInputNameAccepeted;
    trigger: ITriggerFormInput;
    onChange: (...event: any[]) => void;
    value: string;
    placeholder: string;
    autoFocus?: boolean;
    label?: JSX.Element;
    prepend?: JSX.Element;
    append?: JSX.Element;
  }
}
