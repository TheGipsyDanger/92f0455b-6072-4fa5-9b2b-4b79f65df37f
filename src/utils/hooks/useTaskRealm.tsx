import realm from '~/configs/realm';
import {type ITask} from '~/utils';

export const useTaskRealm = () => {
  const create = (params: ITask) => {
    realm.write(() => {
      realm.create('Tasks', params);
    });
  };

  const get = () => {
    return realm.objects('Tasks');
  };

  const remove = (id: string) => {
    const taskToDelete = realm.objects('Tasks').filter(task => task.id === id);
    realm.write(() => {
      if (taskToDelete) {
        realm.delete(taskToDelete);
      }
    });
  };

  return {create, get, remove};
};
