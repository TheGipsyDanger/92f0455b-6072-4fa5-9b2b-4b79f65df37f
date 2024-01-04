import * as React from 'react';
import * as ICON from '@expo/vector-icons';
import {IIcon} from '~/components/Atomics/Icon/Icon.types';
import {Wrapped} from '~/components/Atomics/Wrapped';
import {theme, IColors} from '~/styles/theme';

const Main = ({lib, ...props}: IIcon.IView) => {
  // @ts-ignore
  const Icon = ICON[lib];
  return <Icon {...props} />;
};

export const Icon = ({
  color = 'white',
  lib = 'AntDesign',
  size = 20,
  name = 'stepforward',
  ...props
}: IIcon.IView) => (
  <Wrapped {...props} testID={'Icon'}>
    <Main
      lib={lib}
      size={size}
      color={theme.colors[color] as keyof IColors}
      name={name}
    />
  </Wrapped>
);
