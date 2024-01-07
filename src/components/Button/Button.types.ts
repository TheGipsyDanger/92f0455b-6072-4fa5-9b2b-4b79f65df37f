import {type IWrappedSystem} from '~/utils';

type IButtonVariants = 'primary' | 'disable' | 'link' | 'outline';

export namespace IButton {
  export interface IView extends IWrappedSystem {
    variant: IButtonVariants;
    label: string;
    isLoading: boolean;
  }
  export interface IViewAction extends IWrappedSystem {
    variant: IButtonVariants;
  }
}
