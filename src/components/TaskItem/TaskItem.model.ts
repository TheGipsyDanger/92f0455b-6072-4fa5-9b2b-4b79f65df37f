import type Swipeable from 'react-native-swipeable';
import {useRef} from 'react';
import {type ITaskItem} from '~/components/TaskItem/TaskItem.types';
import {useTaskState} from '~/utils';

export const useTaskItem = ({id}: {id: string}): ITaskItem.IModel => {
  const ref = useRef<Swipeable>(null);

  const {remove, changeStatus, selectTask} = useTaskState();

  const pressChange = () => {
    reCenter();
    changeStatus(id);
  };

  const pressDelete = () => {
    reCenter();
    remove(id);
  };

  const goToTaskDetails = () => {
    reCenter();
    selectTask(id);
  };

  const reCenter = () => ref.current.recenter();

  return {
    ref,
    pressChange,
    pressDelete,
    goToTaskDetails
  };
};
