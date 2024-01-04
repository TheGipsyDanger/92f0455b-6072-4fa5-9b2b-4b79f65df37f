import {IColors} from '~/styles/theme';

export namespace IIcon {
  export interface IView {
    data?: any;
    lib?: string;
    size?: number;
    color: keyof IColors;
    name: string;
    onPress?(): void;
  }
}
