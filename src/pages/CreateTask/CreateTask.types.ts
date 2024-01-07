import {
  type IControl,
  type ITrigger,
  type IHandlerSubmit,
  type IFormErros,
  type ICreateTaskForm,
} from '~/utils';
export namespace ICreateTask {
  export interface IModel {
    control: IControl<ICreateTaskForm<string>>;
    trigger: ITrigger<ICreateTaskForm<string>>;
    handleSubmit: IHandlerSubmit<ICreateTaskForm<string>>;
    errors: IFormErros<ICreateTaskForm<string>>;
    onSubmit: (data: ICreateTaskForm<string>) => void;
    isValid: boolean;
    isLoading: boolean;
  }
}
