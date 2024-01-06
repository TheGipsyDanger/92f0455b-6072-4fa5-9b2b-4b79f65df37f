export namespace IRequestPermissions {
  export interface IView {}
  export interface IModelProps {}
  export interface IModel {
    goToMain: () => void;
    requestAction: () => void;
    isFirstTime: boolean;
    goToSettigs: () => void;
  }
}
