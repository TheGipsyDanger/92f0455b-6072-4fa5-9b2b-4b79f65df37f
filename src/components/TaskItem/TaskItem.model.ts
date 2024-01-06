import {ITaskItem} from '~/components/TaskItem/TaskItem.types';

export const useTaskItem = (): ITaskItem.IModel => {
  const pressDone = () => {
    console.log('Done');
  };

  const pressDelete = () => {
    console.log('Delete');
  };

  const pressOpen = () => {
    console.log('Open');
  };

  return {
    pressDone,
    pressDelete,
    pressOpen,
  };
};
