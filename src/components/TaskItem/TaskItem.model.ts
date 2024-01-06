import {ITaskItem} from '~/components/TaskItem/TaskItem.types';
import {useAppSelector, useTaskState} from '~/utils';

export const useTaskItem = (): ITaskItem.IModel => {
  const tasks = useAppSelector(state => state.Tasks);

  const {remove} = useTaskState();
  const pressDone = (id: string) => {
    console.log('Done');
  };

  const pressDelete = (id: string) => {
    remove(id);
    console.log('Delete');
  };

  const pressOpen = (id: string) => {
    console.log('Open');
  };

  return {
    pressDone,
    pressDelete,
    pressOpen,
  };
};
