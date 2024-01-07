import {ITask} from '~/utils';

export namespace ITaskDetails {
  export interface IView {}
  export interface IModelProps {}
  export interface IModel {
    selectedTask: ITask;
  }
}
