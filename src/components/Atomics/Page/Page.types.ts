import {type IWrappedSystem} from '~/utils';

export namespace IPage {
  export interface IView extends Omit<IWrappedSystem, 'onPress'> {}
}
