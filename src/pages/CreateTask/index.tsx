import * as React from 'react';
import {Div, Text} from '~/components/Atomics';
import { ICreateTask } from '~/pages/CreateTask/CreateTask.types'

export const CreateTask = (props: ICreateTask.IView) => (
  <Div flex={1} center testID={`CreateTask`}>
    <Text color="ORANGE">{`CreateTask`}</Text>
  </Div>
)