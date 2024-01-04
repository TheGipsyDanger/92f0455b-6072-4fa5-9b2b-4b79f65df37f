import {
  BorderProps,
  BoxShadowProps,
  ColorProps,
  FlexboxProps,
  SpaceProps,
  TypographyProps,
  BackgroundColorProps,
  LayoutProps,
  BorderColorProps,
  FontSizeProps,
  FontFamilyProps,
  FontWeightProps,
  FontStyleProps,
  ResponsiveValue,
} from 'styled-system';
import {IFont, IFontSizes, IColors, IRadius} from '~/styles/theme';

export type withChildren<T = {}> = T & {children?: React.ReactNode};
export type StringToNumberMapcd = {[key: string]: number};
export type IModalType = {[key: string]: JSX.Element};
export type IInsets = {top: number; bottom: number};
export type IStringMap = {[key: string]: string};
export type StringToNumberMap = {[key: string]: number};

export interface IWrappedSystem
  extends BorderProps,
    BoxShadowProps,
    ColorProps,
    FlexboxProps,
    SpaceProps,
    TypographyProps,
    BackgroundColorProps,
    BorderColorProps,
    LayoutProps,
    withChildren {
  radius?: keyof IRadius;
  testID?: string;
  center?: boolean;
  onPress?(): void;
  bg?: ResponsiveValue<keyof IColors>;
  activeOpacity?: number;
}

export interface ITextSystem
  extends BorderProps,
    ColorProps,
    FontSizeProps,
    FontFamilyProps,
    FontWeightProps,
    FontStyleProps,
    SpaceProps,
    TypographyProps,
    withChildren {
  textTransform?: string;
  textDecoration?: string;
  font?: IFont;
  size?: keyof IFontSizes;
  color?: ResponsiveValue<keyof IColors>;
  testID?: string;
  numberOfLines?: number;
}

export interface IBaseResponse {
  message?: string;
  status: 'Ok' | 'Error';
}
