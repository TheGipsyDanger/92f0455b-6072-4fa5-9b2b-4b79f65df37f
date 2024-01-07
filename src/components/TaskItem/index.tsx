import * as React from 'react';
import {Div, Spacing, Text, Icon, Conditional} from '../Atomics';
import {type ITaskItem} from './TaskItem.types';
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
  const {pressChange, pressDelete, goToTaskDetails, ref} = useTaskItem({id});
  return (
    <S.Container
      ref={ref}
      rightButtons={[
        <Div key={'item1'}>
          <Conditional render={status === 'done'}>
            <Div onPress={pressChange}>
              <Div height="100%" center width={75}>
                <Icon name="back" size={26} color="primary" />
              </Div>
            </Div>
            <Div onPress={pressChange}>
              <Div height="100%" center width={75}>
                <Icon name="checksquare" size={26} color="green" />
              </Div>
            </Div>
          </Conditional>
        </Div>,
        <Div key={'item2'} onPress={pressDelete}>
          <Div height="100%" center width={75}>
            <Icon
              lib="MaterialCommunityIcons"
              name="delete"
              size={26}
              color="red"
            />
          </Div>
        </Div>
      ]}
    >
      <Div {...rest} testID={'TaskItem'} onPress={goToTaskDetails}>
        <S.Content>
          <Div flexDirection="row">
            <S.Status status={status} />
            <Div flex={2} px={3} py={4}>
              <Spacing space={2}>
                <Text size="xbig" font="bold" numberOfLines={2}>
                  {title}
                </Text>
                <Text numberOfLines={3}>{description}</Text>
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
