import {
  type BorderProps,
  type BoxShadowProps,
  type ColorProps,
  type FlexboxProps,
  type SpaceProps,
  type TypographyProps,
  type BackgroundColorProps,
  type LayoutProps,
  type BorderColorProps,
  type FontSizeProps,
  type FontFamilyProps,
  type FontWeightProps,
  type FontStyleProps,
  type ResponsiveValue,
  type PositionProps,
} from 'styled-system';
import {
  type IFont,
  type IFontSizes,
  type IColors,
  type IRadius,
} from '~/styles/theme';

// eslint-disable-next-line @typescript-eslint/ban-types
export type withChildren<T = {}> = T & {children?: React.ReactNode};
export type StringToNumberMapcd = Record<string, number>;
export type IModalType = Record<string, JSX.Element>;
export interface IInsets {
  top: number;
  bottom: number;
}
export type IStringMap = Record<string, string>;
export type StringToNumberMap = Record<string, number>;

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
    PositionProps,
    withChildren {
  radius?: keyof IRadius;
  testID?: string;
  center?: boolean;
  onPress?: () => void;
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
  font?: keyof IFont;
  size?: keyof IFontSizes;
  color?: ResponsiveValue<keyof IColors>;
  testID?: string;
  numberOfLines?: number;
}

export interface IBaseResponse {
  message?: string;
  status: 'Ok' | 'Error';
}
