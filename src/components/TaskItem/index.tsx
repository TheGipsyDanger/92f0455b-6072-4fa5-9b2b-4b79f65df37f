import * as React from 'react';
import {Div, Spacing, Text, Icon, Conditional} from '../Atomics';
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
        <Div flex={2} px={3} py={4}>
          <Spacing space={2}>
            <Text size="xbig" font="bold">
              {title}
            </Text>
            <Text>{description}</Text>
          </Spacing>
        </Div>
        <Conditional render={Boolean(file)}>
          <Div flex={1} center py={4}>
            <Icon name="file1" size={26} color="grey-clean-300" />
          </Div>
        </Conditional>
      </Div>
    </S.Container>
  </Div>
);
