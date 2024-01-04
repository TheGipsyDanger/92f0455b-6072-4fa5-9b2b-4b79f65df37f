import {IWrappedSystem} from '~/utils';

type IButtonVariants = 'primary' | 'disable' | 'link';

export namespace IButton {
  export interface IView extends IWrappedSystem {
    variant: IButtonVariants;
    label: string;
    isLoading: boolean;
  }
  export interface IModelProps {}
  export interface IModel {}
}
