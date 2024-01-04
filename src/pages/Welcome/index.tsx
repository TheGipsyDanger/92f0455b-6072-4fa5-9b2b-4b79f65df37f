import * as React from 'react';
import {Div, Text} from '~/components/Atomics';
import { IWelcome } from '~/pages/Welcome/Welcome.types'

export const Welcome = (props: IWelcome.IView) => (
  <Div flex={1} center testID={`Welcome`}>
    <Text color="ORANGE">{`Welcome`}</Text>
  </Div>
)