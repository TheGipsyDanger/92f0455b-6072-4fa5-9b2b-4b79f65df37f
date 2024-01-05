import {withChildren, IWrappedSystem} from '~/utils';

export namespace IScreenContent {
  export interface IView extends withChildren, IWrappedSystem {}
  export interface IModelProps {}
  export interface IModel {}
}
