import * as React from 'react';
import {Div, Spacing, Text, Icon, Conditional} from '../Atomics';
import {ITaskItem} from './TaskItem.types';
import {useTaskItem} from './TaskItem.model';
import S from './TaskItem.styles';

export const TaskItem = ({
  id,
  title,
  description,
  status,
  file,
  ...rest
}: ITaskItem.IView) => {
  const {pressDone, pressDelete, pressOpen} = useTaskItem();
  return (
    <S.Container
      rightButtons={[
        <Div>
          <Conditional render={status === 'done'}>
            <Div onPress={() => pressOpen(id)}>
              <Div height="100%" center width={75}>
                <Icon name="back" size={26} color="primary" />
              </Div>
            </Div>
            <Div onPress={() => pressDone(id)}>
              <Div height="100%" center width={75}>
                <Icon name="checksquare" size={26} color="green" />
              </Div>
            </Div>
          </Conditional>
        </Div>,
        <Div onPress={() => pressDelete(id)}>
          <Div height="100%" center width={75}>
            <Icon
              lib="MaterialCommunityIcons"
              name="delete"
              size={26}
              color="red"
            />
          </Div>
        </Div>,
      ]}
    >
      <Div {...rest} testID={`TaskItem`}>
        <S.Content>
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
        </S.Content>
      </Div>
    </S.Container>
  );
};
