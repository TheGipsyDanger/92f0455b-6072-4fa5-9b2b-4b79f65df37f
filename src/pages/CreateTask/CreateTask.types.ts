import {
  IControl,
  ITrigger,
  IHandlerSubmit,
  IFormErros,
  ICreateTaskForm,
} from '~/utils';
export namespace ICreateTask {
  export interface IView {}
  export interface IModelProps {}
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
