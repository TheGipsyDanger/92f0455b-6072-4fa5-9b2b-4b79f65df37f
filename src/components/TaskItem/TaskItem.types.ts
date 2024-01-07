import {type ITask, type IWrappedSystem} from '~/utils';

export type IStatus = 'open' | 'done';

export namespace ITaskItem {
  export interface IView extends ITask, IWrappedSystem {}
  export interface IModel {
    pressChange: () => void;
    pressDelete: () => void;
    goToTaskDetails: () => void;
    ref: React.MutableRefObject<null>;
  }
}
