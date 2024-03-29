import * as React from 'react';
import {Div} from '~/components/Atomics';
import {type IScreenContent} from '~/components/ScreenContent/ScreenContent.types';

export const ScreenContent = ({children, ...rest}: IScreenContent.IView) => (
  <Div
    px={4}
    flex={1}
    justifyContent="space-between"
    testID={'ScreenContent'}
    {...rest}
  >
    {children}
  </Div>
);
