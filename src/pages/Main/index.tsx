import * as React from 'react';
import {useCallback} from 'react';
import {FlatList, type ListRenderItem} from 'react-native';
import {Div, Button, TaskItem, Text, Header} from '~/components';
import {useMain} from '~/pages/Main/Main.model';
import {type ITask} from '~/utils';
import {theme} from '~/styles/theme';

export const Main = () => {
  const {goToCreateTask, tasks, type} = useMain();

  const renderItem: ListRenderItem<ITask> = ({item, index}) => {
    return (
      <TaskItem
        {...item}
        {...(index === 0 ? {mt: 4, mb: 3} : {})}
        {...(index !== 0 ? {mb: 3} : {})}
        mx={3}
      />
    );
  };

  const memoizedRenderItem = useCallback(renderItem, []);

  return (
    <Div flex={1} bg="white">
      <Header.Home />
      <Div flex={1}>
        <FlatList
          ListEmptyComponent={() => (
            <Div mt={4}>
              <Text font="bold" textAlign="center">
                {`Sem tarefas ${type === 'all' ? '' : 'abertas'}\npor enquanto`}
              </Text>
            </Div>
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: theme.space[6]
          }}
          data={tasks}
          extraData={tasks}
          keyExtractor={item => item.id}
          renderItem={memoizedRenderItem}
        />
        <Button.Action variant="primary" onPress={goToCreateTask} />
      </Div>
    </Div>
  );
};
