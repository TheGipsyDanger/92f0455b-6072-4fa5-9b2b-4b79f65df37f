import {IFilterType} from '~/utils';
export namespace IHeader {
  export interface IView {}
  export interface IModelProps {}
  export interface IModel {
    top: number;
    type: IFilterType;
    action: (type: IFilterType) => void;
  }
}
