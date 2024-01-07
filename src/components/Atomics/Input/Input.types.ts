import {type withChildren} from '~/utils';
import {type IFont, type IFontSizes} from '~/styles/theme';
import {type TextInput} from 'react-native';

import {
  type SpaceProps,
  type ColorProps,
  type BorderProps,
  type BoxShadowProps,
  type FontSizeProps,
  type FontStyleProps,
  type TypographyProps,
  type FontFamilyProps,
  type FontWeightProps
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
    testID?: string
    forwardRef: React.MutableRefObject<TextInput | undefined>
    onChange: any
    handleValue: any
    handleChange: any
    onChangeText: any
    disabled: boolean
    editable: boolean
    autoFocus: boolean
    onBlur: any
    placeholder?: string
    mask: string
    font?: keyof IFont
    size?: keyof IFontSizes
    type: string
    value: string
  }
}
