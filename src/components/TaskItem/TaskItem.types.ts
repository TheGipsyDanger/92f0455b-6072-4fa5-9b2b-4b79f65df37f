import {ITask, IWrappedSystem} from '~/utils';

export type IStatus = 'open' | 'done';

export namespace ITaskItem {
  export interface IView extends ITask, IWrappedSystem {}
  export interface IModelProps {}
  export interface IModel {
    pressChange: (id: string) => void;
    pressDelete: (id: string) => void;
    ref: React.MutableRefObject<null>;
  }
}
