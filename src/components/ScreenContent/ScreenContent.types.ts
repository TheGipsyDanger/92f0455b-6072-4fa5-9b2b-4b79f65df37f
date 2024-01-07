import {type withChildren, type IWrappedSystem} from '~/utils';

export namespace IScreenContent {
  export interface IView extends withChildren, IWrappedSystem {}
}
