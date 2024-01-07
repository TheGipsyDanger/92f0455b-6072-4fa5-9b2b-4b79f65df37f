export namespace IRequestPermissions {
  export interface IModel {
    goToMain: () => void;
    requestAction: () => Promise<void>;
    isFirstTime: boolean;
    goToSettigs: () => void;
    goBack: () => void;
    whereParam: string;
  }
}
