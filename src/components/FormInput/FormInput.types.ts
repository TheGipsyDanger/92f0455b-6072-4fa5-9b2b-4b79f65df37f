import {TextInputProps} from 'react-native';

import {
  IWrappedSystem,
  ITriggerFormInput,
  IFormErrosAccepeted,
  IFormInputNameAccepeted,
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
    label?: JSX.Element;
    prepend?: JSX.Element;
    append?: JSX.Element;
  }
  export interface IModelProps {}
  export interface IModel {}
}
