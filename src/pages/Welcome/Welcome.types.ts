import {
  type IControl,
  type ITrigger,
  type IHandlerSubmit,
  type IFormErros,
  type IWelcomeForm
} from '~/utils';
export namespace IWelcome {
  export interface IModel {
    control: IControl<IWelcomeForm<string>>;
    trigger: ITrigger<IWelcomeForm<string>>;
    handleSubmit: IHandlerSubmit<IWelcomeForm<string>>;
    errors: IFormErros<IWelcomeForm<string>>;
    onSubmit: (data: IWelcomeForm<string>) => void;
    isValid: boolean;
    isLoading: boolean;
  }
}
