import {type ITask} from '~/utils';

export namespace IMain {
  export interface IModel {
    tasks: ITask[];
    type: string;
    goToCreateTask: () => void;
  }
}
