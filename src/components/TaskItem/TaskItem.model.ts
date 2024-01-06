import {useRef} from 'react';
import {ITaskItem} from '~/components/TaskItem/TaskItem.types';
import {useAppSelector, useTaskState} from '~/utils';
import Swipeable from 'react-native-swipeable';

export const useTaskItem = (): ITaskItem.IModel => {
  const ref = useRef<Swipeable>(null);

  const {remove, changeStatus} = useTaskState();

  const pressChange = (id: string) => {
    reCenter();
    changeStatus(id);
  };

  const pressDelete = (id: string) => {
    reCenter();
    remove(id);
  };

  const reCenter = () => ref.current.recenter();

  return {
    ref,
    pressChange,
    pressDelete,
  };
};
