import {ITask} from '~/utils';

export namespace IMain {
  export interface IView {}
  export interface IModelProps {}
  export interface IModel {
    tasks: ITask[];
    type: string;
    goToCreateTask: () => void;
  }
}
