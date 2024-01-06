import * as React from 'react';
import {Div, Spacing, Text} from '../Atomics';
import {ITaskItem} from './TaskItem.types';
import S from './TaskItem.styles';

export const TaskItem = ({
  id,
  title,
  description,
  status,
  file,
  ...rest
}: ITaskItem.IView) => (
  <Div {...rest} testID={`TaskItem`}>
    <S.Container>
      <Div flexDirection="row">
        <S.Status status={status} />
        <Div px={3} py={4}>
          <Spacing space={2}>
            <Text size="xbig" font="bold">
              {title}
            </Text>
            <Text>{description}</Text>
          </Spacing>
        </Div>
        <Div py={4}>
          <Text>{file}</Text>
        </Div>
      </Div>
    </S.Container>
  </Div>
);
