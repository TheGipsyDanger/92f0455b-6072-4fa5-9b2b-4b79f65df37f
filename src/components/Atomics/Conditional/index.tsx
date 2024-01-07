import * as React from 'react';
import {Children, type ReactNode} from 'react';

import {type IConditional} from './data';

export const Conditional = ({children, render}: IConditional) => {
  const [first, second] = Children.toArray(children);
  return <>{render ? first : (second as ReactNode)}</>;
};
