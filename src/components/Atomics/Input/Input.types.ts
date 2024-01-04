import {withChildren} from '~/utils';
import {IFont, IFontSizes} from '~/styles/theme';
import {TextInput} from 'react-native';

import {
  SpaceProps,
  ColorProps,
  BorderProps,
  BoxShadowProps,
  FontSizeProps,
  FontStyleProps,
  TypographyProps,
  FontFamilyProps,
  FontWeightProps,
} from 'styled-system';

export namespace IInput {
  export interface IView
    extends withChildren,
      BorderProps,
      ColorProps,
      FontSizeProps,
      FontFamilyProps,
      FontWeightProps,
      BoxShadowProps,
      FontStyleProps,
      SpaceProps,
      TypographyProps {
    testID?: string;
    forwardRef: React.MutableRefObject<TextInput | undefined>;
    onChange: any;
    handleValue: any;
    handleChange: any;
    onChangeText: any;
    disabled: boolean;
    editable: boolean;
    autoFocus: boolean;
    onBlur: any;
    placeholder?: string;
    mask: string;
    font?: keyof IFont;
    size?: keyof IFontSizes;
    type: string;
    value: string;
  }
  export interface IModelProps {}
  export interface IModel {}
}
