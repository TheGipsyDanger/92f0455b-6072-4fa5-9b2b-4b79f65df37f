import {IWrappedSystem} from '~/utils';

export namespace IPage {
  export interface IView extends Omit<IWrappedSystem, 'onPress'> {}
  export interface IModelProps {}
  export interface IModel {}
}