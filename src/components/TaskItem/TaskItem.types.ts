import {ITask, IWrappedSystem} from '~/utils';

export type IStatus = 'open' | 'done';

export namespace ITaskItem {
  export interface IView extends ITask, IWrappedSystem {}
  export interface IModelProps {}
  export interface IModel {
    pressDone: (id: string) => void;
    pressDelete: (id: string) => void;
    pressOpen: (id: string) => void;
  }
}
