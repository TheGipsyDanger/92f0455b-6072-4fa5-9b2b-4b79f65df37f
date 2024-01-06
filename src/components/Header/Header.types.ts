import {IFilterType} from '~/utils';
export namespace IHeader {
  export interface IView {
    label?: string;
  }
  export interface IModelProps {}
  export interface IModel {
    top: number;
    type: IFilterType;
    action: (type: IFilterType) => void;
    goBack: () => void;
    name: string;
  }
}
