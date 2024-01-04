import {
  IControl,
  ITrigger,
  IHandlerSubmit,
  IFormErros,
  IWelcomeForm,
} from '~/utils';
export namespace IWelcome {
  export interface IView {}
  export interface IModelProps {}
  export interface IModel {
    control: IControl<IWelcomeForm<string>>;
    trigger: ITrigger<IWelcomeForm<string>>;
    handleSubmit: IHandlerSubmit<IWelcomeForm<string>>;
    errors: IFormErros<IWelcomeForm<string>>;
    onSubmit: (data: IWelcomeForm<string>) => void;
    isValid: boolean;
  }
}
